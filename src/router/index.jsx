import { createBrowserRouter } from "react-router-dom";

import AuthPage from "../pages/AuthPage";
import GamePage from "../pages/GamePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthPage />,
  },
  {
    path: "/game",
    element: <GamePage />,
  },
]);
