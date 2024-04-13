import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
const MyLayout = React.lazy(() => import("../components/MyLayout"));
const Homepage = React.lazy(() => import("../features/homepage/Homepage"));
const ConnectWallet = React.lazy(
  () => import("../features/connect-wallet/ConnectWallet")
);
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <Homepage />
          </Suspense>
        ),
      },
      {
        path: "/connect",
        element: (
          <Suspense>
            <ConnectWallet />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <div>Error</div>,
  },
]);
