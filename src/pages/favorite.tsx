import { MemeCard } from "@/components/meme-card";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useGetFavoriteMemes } from "@/hooks/useGetFavoriteMemes";

export default function Favorite() {
  const { favoriteMemes } = useGetFavoriteMemes();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
        <h1 className={title()}>Favorite memes list</h1>
        {favoriteMemes.length === 0 && <p>Empty list</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {favoriteMemes.map((meme) => {
            return <MemeCard key={meme.id} meme={meme} />;
          })}
        </div>
      </section>
    </DefaultLayout>
  );
}
