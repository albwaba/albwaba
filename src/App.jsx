import React from "react";
import "./App.css";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-react";

import { RouterProvider } from "react-router-dom";
import { authRouter } from "./routes/authRouter";
import { appRouter } from "./routes/appRouter";

import { ar } from "date-fns/locale";
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <>
      <ClerkProvider
        afterSignOutUrl="/"
        publishableKey={clerkPubKey}
        localization={ar}
      >
        <SignedOut>
          <RouterProvider router={authRouter} />
        </SignedOut>
        <SignedIn>
          <RouterProvider router={appRouter} />
        </SignedIn>
      </ClerkProvider>
    </>
  );
}

export default App;
