import { MemeCard } from "@/components/meme-card";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { useGetMemes } from "@/hooks/useGetMemes";

export default function Memes() {
  const { memes } = useGetMemes();

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-8 py-8 md:py-10">
        <h1 className={title()}>Memes list</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {memes.map((meme) => {
            return <MemeCard key={meme.id} meme={meme} />;
          })}
        </div>
      </section>
    </DefaultLayout>
  );
}
