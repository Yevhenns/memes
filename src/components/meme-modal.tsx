import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/react";
import { FC, ReactNode } from "react";

type MemeModalProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  children: ReactNode;
};

export const MemeModal: FC<MemeModalProps> = ({
  isOpen,
  onOpenChange,
  children,
}) => {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit meme
              </ModalHeader>
              <ModalBody>{children}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
