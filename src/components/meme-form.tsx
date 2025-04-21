import {
  addToast,
  Button,
  Form,
  Input,
  Select,
  SelectItem,
} from "@heroui/react";
import { FC } from "react";
import { Controller, useForm } from "react-hook-form";

import { Meme } from "@/types";

type MemeFormProps = {
  onOpenChange: () => void;
  currentMeme?: Meme | null;
  memes: Meme[];
  setMemes: React.Dispatch<React.SetStateAction<Meme[]>>;
};

export const MemeForm: FC<MemeFormProps> = ({
  onOpenChange,
  currentMeme,
  memes,
  setMemes,
}) => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      title: currentMeme?.title || "",
      image: currentMeme?.image || "",
      likes: currentMeme?.likes || "",
    },
  });

  const likesCount = Array.from({ length: 99 }, (_, i) => i + 1);

  const onSubmit = (data: {
    title: string;
    image: string;
    likes: number | string;
  }) => {
    if (currentMeme) {
      const updatedMemes = memes.map((meme) =>
        meme.id === currentMeme.id
          ? { ...meme, title: data.title, image: data.image, likes: data.likes }
          : meme,
      );

      localStorage.setItem("memes", JSON.stringify(updatedMemes));

      setMemes(updatedMemes);

      addToast({
        title: "Meme edited successfully",
        timeout: 3000,
        shouldShowTimeoutProgress: true,
      });

      onOpenChange();

      return;
    }

    const newMeme = {
      id: memes.length + 1,
      title: data.title,
      image: data.image,
      likes: data.likes,
    };

    const updatedMemes = [...memes, newMeme];

    localStorage.setItem("memes", JSON.stringify(updatedMemes));

    setMemes(updatedMemes);

    addToast({
      title: "Meme created successfully",
      timeout: 3000,
      shouldShowTimeoutProgress: true,
    });

    onOpenChange();
  };

  return (
    <Form className="w-full gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="title"
        render={({ field, fieldState }) => (
          <Input
            {...field}
            isRequired
            errorMessage={fieldState.error?.message}
            label="Title"
            labelPlacement="outside"
            maxLength={100}
            minLength={3}
            placeholder="Enter a title"
            type="text"
          />
        )}
      />
      <Controller
        control={control}
        name="image"
        render={({ field, fieldState }) => (
          <Input
            {...field}
            isRequired
            errorMessage={fieldState.error?.message}
            label="Image URL"
            labelPlacement="outside"
            maxLength={100}
            placeholder="Enter an image URL"
            type="url"
          />
        )}
      />
      <Controller
        control={control}
        name="likes"
        render={({ field }) => (
          <Select
            isRequired
            {...field}
            label="Likes count"
            labelPlacement="outside"
            placeholder="Select likes count"
            selectedKeys={[field.value?.toString()]}
          >
            {likesCount.map((like) => (
              <SelectItem key={like} textValue={like.toString()}>
                {like}
              </SelectItem>
            ))}
          </Select>
        )}
      />
      <div className="py-4 flex gap-2 ml-auto">
        <Button
          color="danger"
          type="button"
          variant="light"
          onPress={onOpenChange}
        >
          Close
        </Button>
        <Button color="primary" type="submit">
          Save
        </Button>
      </div>
    </Form>
  );
};
