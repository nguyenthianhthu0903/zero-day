import { CloseOutlined } from "@ant-design/icons";
import { Modal, ModalProps } from "antd";
import React, { forwardRef, useImperativeHandle, useState } from "react";

export interface ModalRef {
  openModal: (modalTitle: string, modalContent: React.ReactNode) => void;
  closeModal: () => void;
}

const MyModal = forwardRef<ModalRef, ModalProps>((props, ref) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [title, setTitle] = useState<string>("");
  const [component, setComponent] = useState<React.ReactNode>(null);
  const openModal = (modalTitle: string, modalContent: React.ReactNode) => {
    setTitle(modalTitle);
    setComponent(modalContent);
    setOpenDrawer(true);
  };
  const closeModal = () => {
    setOpenDrawer(false);
  };
  useImperativeHandle(ref, () => ({
    openModal,
    closeModal,
  }));
  return (
    <Modal
      footer={false}
      closeIcon={false}
      width={350}
      open={openDrawer}
      maskClosable
    >
      <div className="flex flex-col h-full justify-start">
        <div className="flex justify-between items-center">
          <h6 className="text-xl font-bold py-2">{title}</h6>
          <CloseOutlined
            className="cursor-pointer"
            onClick={() => closeModal()}
          />
        </div>
        <div className="h-full">{component}</div>
      </div>
    </Modal>
  );
});

MyModal.displayName = "MyModal";

export default MyModal;
