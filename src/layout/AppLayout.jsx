import { Outlet, useNavigation } from "react-router-dom";
import AppNav from "../components/AppNav";
import { Suspense } from "react";
import SpinnerFullPage from "../components/SpinnerFullPage";
import LogoSpinner from "../components/LogoSpinner";
import Category from "../components/Category";
import { usePosts } from "../contexts/PostsContext";

export default function AppLayout() {
  const { state } = useNavigation();
  const isLoading = state === "loading";
  // const { handeleChangeFilter } = usePosts();
  return (
    <>
      <AppNav />
      <main className="p-4 container mx-auto  ">
        {isLoading ? <LogoSpinner /> : <Outlet />}
      </main>
    </>
  );
}
