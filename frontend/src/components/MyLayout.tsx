import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";

import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const MyLayout: React.FC = (): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="bg-white">
      <Content>
        <Outlet />
      </Content>

      <Footer className="bg-white">© Copyright 2024 by Zero-day</Footer>
    </Layout>
  );
};

export default MyLayout;
