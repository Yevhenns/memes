import { MemeCard } from "./meme-card";

import { Meme } from "@/types";

type CardListProps = {
  memes: Meme[];
  favoriteIds: number[];
  toggleFavorite: (id: number) => void;
};

export const CardList = ({
  memes,
  favoriteIds,
  toggleFavorite,
}: CardListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {memes.map((meme) => {
        return (
          <MemeCard
            key={meme.id}
            favoriteIds={favoriteIds}
            meme={meme}
            toggleFavorite={toggleFavorite}
          />
        );
      })}
    </div>
  );
};
