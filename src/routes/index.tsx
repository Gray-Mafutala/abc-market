import React from "react";
import { useRoutes } from "react-router-dom";
import RequireAuth from "../components/Features/RequireAuth";

const Home = React.lazy(() => import("../pages/Home"));
const ProductsOfCategory = React.lazy(
  () => import("../pages/ProductsOfCategory")
);
const Orders = React.lazy(() => import("../pages/Orders"));
const Favorites = React.lazy(() => import("../pages/Favorites"));
const Account = React.lazy(() => import("../pages/Account"));

const Routing = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },

    {
      path: "/",
      element: <ProductsOfCategory />,
      children: [
        { path: "products", element: <ProductsOfCategory /> },
        {
          path: "products/category/:category",
          element: <ProductsOfCategory />,
        },
      ],
    },

    {
      path: "/orders",
      element: (
        <RequireAuth>
          <Orders />,
        </RequireAuth>
      ),
    },

    {
      path: "/favorites",
      element: (
        <RequireAuth>
          <Favorites />,
        </RequireAuth>
      ),
    },

    {
      path: "/account",

      element: (
        <RequireAuth>
          <Account />,
        </RequireAuth>
      ),
    },
  ]);

  return routes;
};

export default Routing;
