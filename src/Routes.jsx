import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Users from "./Pages/Users/Users";
import ProductsList from "./Pages/Products/ProductsList";
import Orders from "./Pages/Orders/Orders";
import Reviews from "./Pages/Reviews/Reviews";
import Base from "./Pages/Base";
import Settings from "./Pages/Settings/Settings";
import Error404 from "./Pages/Error 404/Error404";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "products",
        element: <ProductsList />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "reviews",
        element: <Reviews />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default Routes;
