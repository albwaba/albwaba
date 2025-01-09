import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";
import Save from "../pages/Save";
import { action } from "../pages/NewPost";
import Search from "../pages/Search";
import { action as EditAction } from "../pages/EditPost";
import { loader as EditLoader } from "../pages/EditPost";
import AppLayout from "../layout/AppLayout";
import NewPost from "../pages/NewPost";
import GeolocationProvider from "../contexts/Geolocation";
import Post, { postLoader } from "../pages/Post";
import MyPosts from "../pages/MyPosts";
import MyPostsProvider from "../contexts/MyPostsContext";
import PostsProvider from "../contexts/PostsContext";
import FavoritesProvider from "../contexts/FavoritesContext";

import AdminProvider from "../contexts/Admin";
import Profile, { profileLoader } from "../pages/Profile";
import AdminPage from "../pages/AdminPage";
import EditPost from "../pages/EditPost";
import Notification from "../pages/Notification";
import FilterResult from "../pages/FilterResult";

import SearchResult, { searchResultLoader } from "../pages/SearchResult";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <AdminProvider>
          <PostsProvider>
            <FavoritesProvider>
              <MyPostsProvider>
                <AppLayout />
              </MyPostsProvider>
            </FavoritesProvider>
          </PostsProvider>
        </AdminProvider>
      </>
    ),
    children: [
      {
        // index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <HomePage title="الرئيسة" />,
      },

      {
        path: "/saved",
        element: <Save title="المفضلة" />,
        // loader: FavoritesPostsLoader,
      },
      {
        path: "/search",
        element: <Search title="بحث متقدم" />,
      },
      {
        path: "/search_result",
        element: <SearchResult title="نتائج البحث" />,
        loader: searchResultLoader,
      },
      {
        path: "/filter",
        element: <FilterResult title="الرئيسة" />,
        // loader: FavoritesPostsLoader,
      },
      {
        path: "/form",
        action,
        element: (
          <GeolocationProvider>
            <NewPost title="نشر إعلان" />
          </GeolocationProvider>
        ),
      },
      {
        path: "/notifications",
        element: <Notification title="الاشعارات" />,
        // loader: NotifcaLoader,
      },
      {
        path: "/admin",
        element: <AdminPage title="admin" />,
      },
      {
        path: "/post/edit/:postId",
        action: EditAction,
        loader: EditLoader,
        element: (
          <GeolocationProvider>
            <EditPost title="تعديل الاعلان" />
          </GeolocationProvider>
        ),
      },
      {
        path: "/profile/:userId",
        element: <Profile />,
        loader: profileLoader,
      },
      {
        path: "/post/:postId",
        element: <Post />,
        loader: postLoader,
      },
      {
        path: "/my-posts",
        element: (
          <MyPostsProvider>
            <MyPosts title="إعلاناتي" />
          </MyPostsProvider>
        ),
      },
      {
        path: "*",
        element: <NotFound title="الصفحة غير موجودة" />,
      },
    ],
  },
]);
