import { useDisclosure } from "@heroui/modal";
import { useState } from "react";
import { Button } from "@heroui/button";

import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { MemeTable } from "@/components/meme-table";
import { MemeModal } from "@/components/meme-modal";
import { Meme } from "@/types";
import { MemeForm } from "@/components/meme-form";
import { useGetMemes } from "@/hooks/useGetMemes";

export default function IndexPage() {
  const [currentMeme, setCurrentMeme] = useState<Meme | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: createIsOpen,
    onOpen: createOnOpen,
    onOpenChange: createOnOpenChange,
  } = useDisclosure();

  const { memes, setMemes } = useGetMemes();

  const currentMemeHandler = (meme: Meme) => {
    setCurrentMeme(meme);
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
        <h1 className={title()}>Memes table</h1>
        <Button onPress={createOnOpen}>Create meme</Button>
        <MemeTable
          currentMemeHandler={currentMemeHandler}
          memes={memes}
          onOpen={onOpen}
        />
        <MemeModal isOpen={isOpen} onOpenChange={onOpenChange}>
          <MemeForm
            currentMeme={currentMeme}
            memes={memes}
            setMemes={setMemes}
            onOpenChange={onOpenChange}
          />
        </MemeModal>
        <MemeModal isOpen={createIsOpen} onOpenChange={createOnOpenChange}>
          <MemeForm
            memes={memes}
            setMemes={setMemes}
            onOpenChange={createOnOpenChange}
          />
        </MemeModal>
      </section>
    </DefaultLayout>
  );
}
