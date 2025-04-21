import { Link } from "@heroui/link";
import { useEffect } from "react";

import { Navbar } from "@/components/navbar";
import { memes } from "@/assets/memes";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const items = localStorage.getItem("memes");

    if (items) return;

    if (!items) {
      localStorage.setItem("memes", JSON.stringify(memes));
    }
  }, []);

  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://heroui.com"
          title="heroui.com homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">HeroUI</p>
        </Link>
      </footer>
    </div>
  );
}
