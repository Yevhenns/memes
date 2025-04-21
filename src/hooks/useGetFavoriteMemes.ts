import { useEffect, useState } from "react";

import { useGetMemes } from "./useGetMemes";

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

      return;
    }
    const filteredArray = [...favoriteIds, id];

    setFavoriteIds(filteredArray);
    localStorage.setItem("favorite memes", JSON.stringify(filteredArray));
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
