import { Table, Button, Image, Modal } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { WalletOutlined, EditOutlined, EyeFilled } from "@ant-design/icons";
import MyModal, { ModalRef } from "../../components/MyModal";
import FormOrder from "./FormOrder";
import { Order } from "../../interfaces/order";
import axios from "axios";

const ConnectWallet: React.FC = (): JSX.Element => {
  const [data, setData] = useState<Order[]>([]);
  const fetchData = () => {
    axios.get("http://localhost:8000/order").then((res) => {
      setData(res?.data?.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const modalRef = useRef<ModalRef>(null);
  const onEdit = (record: Order) => {
    modalRef.current?.openModal(
      "Update Order",
      <FormOrder
        onClose={modalRef.current.closeModal}
        data={record}
        fetchData={fetchData}
      />
    );
  };
  const onWatch = (record: Order) => {
    modalRef.current?.openModal(
      "Watch Order",
      <FormOrder
        onClose={modalRef.current.closeModal}
        isRead={true}
        data={record}
        fetchData={fetchData}
      />
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
      <div className="overflow-auto">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-3 text-left">
            <h1 className="text-3xl font-semibold">QUẢN LÝ NGUỒN HÀNG</h1>
            <i className="text-[#2852a5]">
              No wallet connected. Connect wallet to show accounts and their ETH
              balances
            </i>
            <p>
              <strong>Connected blockchain:</strong>{" "}
              <span id="network-name"></span>
            </p>

            <p>
              <strong>Selected account:</strong>{" "}
              <span id="selected-account"></span>
            </p>
          </div>
          <Button
            className="bg-green-700 btn-create"
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
                render: (_, record: Order) => {
                  return (
                    <div className="flex justify-end gap-3">
                      <Button
                        className="bg-yellow-500 border-yellow-500 btn-edit text-white"
                        icon={<EditOutlined />}
                        onClick={() => onEdit(record)}
                      />
                      <Button
                        className="bg-sky-700 btn-watch text-white"
                        icon={<EyeFilled />}
                        onClick={() => onWatch(record)}
                      />
                    </div>
                  );
                },
              },
            ]}
            dataSource={data}
          />
        </div>
        <div className="mt-4 flex gap-3 flex-col">
          <h3 className="text-xl font-bold">All account balances</h3>
          <Table
            columns={[
              {
                title: "Address",
                dataIndex: "address",
                key: "address",
              },
              {
                title: "ETH balance",
                dataIndex: "ethBalance",
                key: "ethBalance",
              },
              {
                title: "Location",
                dataIndex: "location",
                key: "location",
              },
            ]}
            dataSource={[
              {
                address: "0xabcxyj",
                ethBalance: "10000000",
              },
            ]}
          />
          <p>
            Please try to switch between different accounts in your wallet if
            your wallet supports this functonality.
          </p>
        </div>
      </div>
      <MyModal ref={modalRef} />
    </div>
  );
};
export default ConnectWallet;
