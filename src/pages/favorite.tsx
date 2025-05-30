import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useGetFavoriteMemes } from "@/hooks/useGetFavoriteMemes";
import { CardList } from "@/components/card-list";

export default function Favorite() {
  const { favoriteMemes, favoriteIds, toggleFavorite } = useGetFavoriteMemes();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
        <h1 className={title()}>Favorite memes list</h1>
        {favoriteMemes.length === 0 ? (
          <p>Empty list</p>
        ) : (
          <CardList
            favoriteIds={favoriteIds}
            memes={favoriteMemes}
            toggleFavorite={toggleFavorite}
          />
        )}
      </section>
    </DefaultLayout>
  );
}
