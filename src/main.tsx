import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorPage } from "./404";
import DashboardRoot from "./dashboard/dashboard-root";
import AddProduct from "./dashboard/routes/products/add-product";
import Products from "./dashboard/routes/products/products";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardRoot />,
    children: [
      {
        path: "/",
        element: <Products />,
        loader: () => fetch("https://fakestoreapi.com/products?limit=9"),
      },
      {
        path: "/create-new-product",
        element: <AddProduct />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
