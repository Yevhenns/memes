import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@heroui/react";
import { FC } from "react";

import { Meme } from "@/types";

type MemeCardProps = {
  meme: Meme;
};

export const MemeCard: FC<MemeCardProps> = ({ meme }) => {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="meme logo"
          height={"auto"}
          radius="sm"
          src={meme.image}
          width={"100%"}
        />
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{meme.title}</p>
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
