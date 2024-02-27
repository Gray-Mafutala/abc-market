import React from "react";
import { useRoutes } from "react-router-dom";
import RequireAuth from "../features/RequireAuth";

const Home = React.lazy(() => import("../pages/Home"));
const CategoryProducts = React.lazy(() => import("../pages/CategoryProducts"));
const Orders = React.lazy(() => import("../pages/Orders"));
const Favorites = React.lazy(() => import("../pages/Favorites"));
const UserAccount = React.lazy(() => import("../pages/UserAccount"));
const Login = React.lazy(() => import("../pages/Login"));

const Routing = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },

    {
      path: "products/category/:category",
      element: <CategoryProducts />,
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
          <UserAccount />
        </RequireAuth>
      ),
      },
    
      { path: "/login", element: <Login /> },
  ]);

  return routes;
};

export default Routing;
