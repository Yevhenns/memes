import { addToast, Button, Form, Input } from "@heroui/react";
import { FC, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

import { Meme } from "@/types";

type MemeFormProps = {
  onOpenChange: () => void;
  currentMeme: Meme | null;
  memes: Meme[];
  setMemes: React.Dispatch<React.SetStateAction<Meme[]>>;
};

export const MemeForm: FC<MemeFormProps> = ({
  onOpenChange,
  currentMeme,
  memes,
  setMemes,
}) => {
  const { handleSubmit, control, setValue } = useForm({
    defaultValues: {
      title: "",
      image: "",
    },
  });

  const onSubmit = (data: { title: string; image: string }) => {
    if (currentMeme) {
      const updatedMemes = memes.map((meme) =>
        meme.id === currentMeme.id
          ? { ...meme, title: data.title, image: data.image }
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
    }
  };

  useEffect(() => {
    if (currentMeme) {
      setValue("title", currentMeme.title);
      setValue("image", currentMeme.image);
    }
  }, [currentMeme]);

  return (
    <Form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="title"
        render={({ field }) => (
          <Input
            {...field}
            isRequired
            errorMessage="Please enter a title"
            label="Title"
            labelPlacement="outside"
            maxLength={400}
            placeholder="Enter a title"
            type="text"
          />
        )}
      />

      <Controller
        control={control}
        name="image"
        render={({ field }) => (
          <Input
            {...field}
            isRequired
            errorMessage="Please enter an image URL"
            label="Image URL"
            labelPlacement="outside"
            maxLength={200}
            placeholder="Enter an image URL"
            type="url"
          />
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
