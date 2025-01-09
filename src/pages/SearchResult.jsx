import axios from "axios";
import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import PostList from "../components/PostList";
import { baseApi } from "../api/posts";

export default function SearchResult({ title }) {
  const { data } = useLoaderData();
  useEffect(() => {
    document.title = title;
  }, []);
  return <PostList posts={data} />;
}

export async function searchResultLoader({ request: { url, signal } }) {
  const [, searchParams] = url.split("?");

  const posts = await baseApi.get(`posts/search?${searchParams}`, { signal });
  return posts;
}
