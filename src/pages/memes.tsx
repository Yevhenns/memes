import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useGetMemes } from "@/hooks/useGetMemes";
import { CardList } from "@/components/card-list";
import { useGetFavoriteMemes } from "@/hooks/useGetFavoriteMemes";

export default function Memes() {
  const { memes } = useGetMemes();
  const { favoriteIds, toggleFavorite } = useGetFavoriteMemes();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
        <h1 className={title()}>Memes list</h1>
        <CardList
          favoriteIds={favoriteIds}
          memes={memes}
          toggleFavorite={toggleFavorite}
        />
      </section>
    </DefaultLayout>
  );
}
