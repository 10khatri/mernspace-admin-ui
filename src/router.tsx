import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Category from "./Pages/Category";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/category",
    element: <Category />,
  },
]);
