import { createBrowserRouter } from "react-router-dom";
import SignOut from "../pages/SignOut";
import NotFound from "../pages/NotFound";
export const authRouter = createBrowserRouter([
  {
    element: <SignOut />,
    path: "/",
    index: true,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
