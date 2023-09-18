import React from "react";
import { useRoutes } from "react-router-dom";
import RequireAuth from "../components/Features/RequireAuth";

const Home = React.lazy(() => import("../pages/Home"));
const CategoryProducts = React.lazy(
  () => import("../pages/CategoryProducts")
);
const Orders = React.lazy(() => import("../pages/Orders"));
const Favorites = React.lazy(() => import("../pages/Favorites"));
const Account = React.lazy(() => import("../pages/Account"));

const Routing = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },

    {
      path: "/",
      element: <CategoryProducts />,
      children: [
        { path: "products", element: <CategoryProducts /> },
        {
          path: "products/category/:category",
          element: <CategoryProducts />,
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
