import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./404";
import DashboardRoot from "./dashboard/dashboard-root";
import AddProduct from "./dashboard/routes/products/add-product";
import UpdateProduct from "./dashboard/routes/products/edit-single-product";
import Products from "./dashboard/routes/products/products";
import "./index.css";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardRoot />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/products/new",
        element: <AddProduct />,
      },
      {
        path: "/products/:productId/edit",
        element: <UpdateProduct />,
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
    <QueryClientProvider client={queryClient}>
      {/* The rest of your application */}
      <ReactQueryDevtools initialIsOpen={true} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
