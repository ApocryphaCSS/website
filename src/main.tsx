import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Root from "@/Root";
import Home from "@/pages/Home";
import Documentation from "@/pages/Documentation";
import NotFound from "@/pages/NotFound";

import "@/style.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/docs",
        element: <Documentation />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
