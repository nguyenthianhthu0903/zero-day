import { Button, Image } from "antd";
import React from "react";
import { WalletOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./homepage.css";
const Homepage: React.FC = (): JSX.Element => {
  const history = useNavigate();
  return (
    <div className="h-full content">
      <div className="header-menu flex items-center justify-center p-5">
        <Image
          src={require("../../images/logo.png")}
          preview={false}
          width={60}
        />
        <span className="text-xl font-bold text-[#2852a5]">Zero-Day</span>
      </div>
      <div className="flex flex-col gap-3 items-center h-full justify-center">
        <h1 className="text-5xl font-semibold transfer-text">
          SOURCING MANAGEMENT
        </h1>
        <i className="text-[#1b2c50] text-lg bg-[#9bcef5] p-2">
          No wallet connected. Connect wallet to show accounts and their ETH
          balances
        </i>
        <Button
          className="w-fit"
          type="primary"
          size="large"
          icon={<WalletOutlined />}
          onClick={() => {
            history("/connect");
          }}
        >
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};

export default Homepage;
