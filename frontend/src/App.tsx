import "./App.css";
import { RouterProvider } from "react-router-dom";
import React from "react";
import { router } from "./routes/AppRoute";
import { ConfigProvider } from "antd";
function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            fontSize: 14,
            colorPrimary: "#1e7dd9",
            borderRadius: 8,
          },
        }}
      >
        <RouterProvider router={router} />
      </ConfigProvider>
    </div>
  );
}

export default App;
