import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@heroui/react";
import { FC, useState } from "react";

import { Meme } from "@/types";

type MemeCardProps = {
  meme: Meme;
};

export const MemeCard: FC<MemeCardProps> = ({ meme }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(true);

  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3 flex-col">
        <Image
          alt="meme logo"
          height={"auto"}
          radius="sm"
          src={isImageLoaded ? meme.image : "/not-found.webp"}
          width={"100%"}
          onError={() => setIsImageLoaded(false)}
        />
        {!isImageLoaded && <p>Meme image is not found</p>}
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="mt-auto">
          <p>{meme.title}</p>
          <p>Likes: {meme.likes}</p>
        </div>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href={meme.image}>
          Visit meme.
        </Link>
      </CardFooter>
    </Card>
  );
};
