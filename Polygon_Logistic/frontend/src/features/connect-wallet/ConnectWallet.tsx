import { Table, Button, Image, Modal } from "antd";
import React, { useRef } from "react";
import { WalletOutlined, EditOutlined, EyeFilled } from "@ant-design/icons";
import MyModal, { ModalRef } from "../../components/MyModal";
import FormOrder from "./FormOrder";

const ConnectWallet: React.FC = (): JSX.Element => {
  const modalRef = useRef<ModalRef>(null);
  const onEdit = () => {
    modalRef.current?.openModal(
      "Update Order",
      <FormOrder onClose={modalRef.current.closeModal} />
    );
  };
  const onWatch = () => {
    modalRef.current?.openModal(
      "Watch Order",
      <FormOrder onClose={modalRef.current.closeModal} isRead={true} />
    );
  };

  const onCreate = () => {
    modalRef.current?.openModal(
      "Create Order",
      <FormOrder onClose={modalRef.current.closeModal} />
    );
  };
  return (
    <div className="h-full p-5 flex-col justify-items-start gap-4">
      <div className="header-menu flex items-center justify-between py-5">
        <div className="flex items-center">
          <Image
            src={require("../../images/logo.png")}
            preview={false}
            width={60}
          />
          <span className="text-xl font-bold text-[#469bea]">Zero-Day</span>
        </div>
        <Button
          className="w-fit"
          type="primary"
          size="large"
          danger
          icon={<WalletOutlined />}
        >
          Disconnect Wallet
        </Button>
      </div>
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-3 text-left">
          <h1 className="text-3xl font-semibold">QUẢN LÝ NGUỒN HÀNG</h1>
          <i className="text-[#2852a5]">
            No wallet connected. Connect wallet to show accounts and their ETH
            balances
          </i>
        </div>
        <Button
          className="bg-green-700"
          type="primary"
          onClick={() => onCreate()}
        >
          Create
        </Button>
      </div>
      <div className="mt-4">
        <Table
          columns={[
            {
              title: "Tracking Number",
              dataIndex: "trackingNumber",
              key: "trackingNumber",
            },
            {
              title: "Status",
              dataIndex: "status",
              key: "status",
            },
            {
              title: "Location",
              dataIndex: "location",
              key: "location",
            },
            {
              title: <div className="text-end">Hành động</div>,
              fixed: "right",
              className: "action-column",
              render: (_, record) => {
                return (
                  <div className="flex justify-end gap-3">
                    <Button
                      className="bg-yellow-500"
                      icon={<EditOutlined />}
                      onClick={() => onEdit()}
                    />
                    <Button
                      className="bg-blue-700"
                      icon={<EyeFilled />}
                      onClick={() => onWatch()}
                    />
                  </div>
                );
              },
            },
          ]}
          dataSource={[
            {
              trackingNumber: "001",
              status: "Đang vận chuyển",
              location: "Sài Gòn",
            },
          ]}
        />
      </div>
      <MyModal ref={modalRef} />
    </div>
  );
};
export default ConnectWallet;
