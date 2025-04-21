import { useEffect, useState } from "react";

import { useGetMemes } from "./useGetMemes";
import { addToast } from "@heroui/toast";

export const useGetFavoriteMemes = () => {
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);

  const { memes } = useGetMemes();

  const favoriteMemes = memes.filter((meme) => favoriteIds.includes(meme.id));

  const toggleFavorite = (id: number) => {
    const isFavorite = favoriteIds.includes(id);

    if (isFavorite) {
      const filteredArray = favoriteIds.filter((item) => item !== id);

      setFavoriteIds(filteredArray);
      localStorage.setItem("favorite memes", JSON.stringify(filteredArray));

      addToast({
        title: "Removed from favorite",
        timeout: 3000,
        shouldShowTimeoutProgress: true,
      });

      return;
    }
    const filteredArray = [...favoriteIds, id];

    setFavoriteIds(filteredArray);
    localStorage.setItem("favorite memes", JSON.stringify(filteredArray));

    addToast({
      title: "Added to favorite",
      timeout: 3000,
      shouldShowTimeoutProgress: true,
    });
  };

  useEffect(() => {
    const items = localStorage.getItem("favorite memes");

    if (!items) return;

    if (items) {
      setFavoriteIds(JSON.parse(items));
    }
  }, []);

  return { favoriteMemes, favoriteIds, toggleFavorite };
};
