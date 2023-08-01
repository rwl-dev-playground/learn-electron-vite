import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { TopPage } from "./routes/TopPage.tsx";
import { SecondPage } from "./routes/SecondPage.tsx";
import "./index.css";

const router = createHashRouter([
  {
    path: "/",
    element: <TopPage />,
  },
  {
    path: "/second",
    element: <SecondPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

postMessage({ payload: "removeLoading" }, "*");
