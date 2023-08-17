import React from "react";
import { useRoutes } from "react-router-dom";

const Home = React.lazy(() => import("../pages/Home"));
const Orders = React.lazy(() => import("../pages/Orders"));

const Routing = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },

    {
      path: "/orders",
      element: <Orders />,
    },
  ]);

  return routes;
};

export default Routing;
