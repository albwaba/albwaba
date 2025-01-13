import { createBrowserRouter } from "react-router-dom";

import NotFound from "../pages/NotFound";
import { lazy, Suspense } from "react";
const SignOutPage = lazy(() => import("../pages/SignOut"));

import Loading from "../components/Loading";
export const authRouter = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Loading />}>
        <SignOutPage />
      </Suspense>
    ),
    path: "/",
    index: true,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
