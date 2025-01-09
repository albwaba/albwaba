import React from "react";

import PostList from "../components/PostList";
import { usSavedePosts } from "../contexts/FavoritesContext";

function Save() {
  const { savedPosts } = usSavedePosts();
  console.log(savedPosts);

  return <PostList posts={savedPosts} />;
}

export async function FavoritesPostsLoader() {
  // try {
  // const userId = localStorage.getItem("user-id");
  // const data = await axios.get(
  //   `http://localhost:2000/api/posts/${userId}/favorites`
  // );
  // return data;
  // } catch (error) {
  //   console.log(error.message);
  // }
}

export default Save;
