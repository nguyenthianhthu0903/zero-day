import { Table, Button, Image } from "antd";
import React from "react";
import { WalletOutlined, EditOutlined } from "@ant-design/icons";

const ConnectWallet: React.FC = (): JSX.Element => {
  const onEdit = () => {
    return;
  };
  return (
    <div className="h-full p-4 flex-col justify-items-start">
      <div className="header-menu flex items-center justify-between p-5">
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
        <Button className="bg-green-700" type="primary">
          Tạo mới
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
                  <div className="flex justify-end">
                    <Button
                      className="bg-yellow-500"
                      icon={<EditOutlined />}
                      onClick={() => onEdit()}
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
    </div>
  );
};
export default ConnectWallet;
