import React, { FC } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@heroui/react";

import { EditIcon } from "./icons";

import { Meme } from "@/types";

export const columns = [
  { name: "TITLE", uid: "title" },
  { name: "LIKES", uid: "likes" },
  { name: "ACTIONS", uid: "actions" },
];

type MemeTableProps = {
  onOpen: () => void;
  currentMemeHandler: (meme: Meme) => void;
  memes: Meme[];
};

export const MemeTable: FC<MemeTableProps> = ({
  onOpen,
  currentMemeHandler,
  memes,
}) => {
  const renderCell = React.useCallback((meme: Meme, columnKey: React.Key) => {
    const cellValue = meme[columnKey as keyof Meme];

    switch (columnKey) {
      case "title":
        return <p className="text-bold text-sm capitalize">{meme.title}</p>;
      case "likes":
        return <p className="text-bold text-sm capitalize">{meme.likes}</p>;
      case "actions":
        return (
          <div className="relative flex justify-center items-center gap-2">
            <Button
              isIconOnly
              onPress={() => {
                onOpen();
                currentMemeHandler(meme);
              }}
            >
              <EditIcon />
            </Button>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={memes}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
