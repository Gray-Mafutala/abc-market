import React from "react";
import { useRoutes } from "react-router-dom";
import RequireAuth from "../features/RequireAuth";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const CategoryProductsPage = React.lazy(
  () => import("../pages/CategoryProductsPage")
);
const OrdersPage = React.lazy(() => import("../pages/OrdersPage"));
const FavoritesPage = React.lazy(() => import("../pages/FavoritesPage"));
const UserAccountPage = React.lazy(() => import("../pages/UserAccountPage"));
const LoginPage = React.lazy(() => import("../pages/LoginPage"));

const Routing = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },

    {
      path: "products/category/:category",
      element: <CategoryProductsPage />,
    },

    {
      path: "/orders",
      element: (
        <RequireAuth>
          <OrdersPage />,
        </RequireAuth>
      ),
    },

    {
      path: "/favorites",
      element: (
        <RequireAuth>
          <FavoritesPage />,
        </RequireAuth>
      ),
    },

    {
      path: "/account",
      element: (
        <RequireAuth>
          <UserAccountPage />
        </RequireAuth>
      ),
    },

    { path: "/login", element: <LoginPage /> },
  ]);

  return routes;
};

export default Routing;
