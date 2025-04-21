import { useEffect, useState } from "react";

import { Meme } from "@/types";

export const useGetMemes = () => {
  const [memes, setMemes] = useState<Meme[]>([]);

  useEffect(() => {
    const items = localStorage.getItem("memes");

    if (!items) return;

    if (items) {
      setMemes(JSON.parse(items));
    }
  }, []);

  return { memes, setMemes };
};
