import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/login/login";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
