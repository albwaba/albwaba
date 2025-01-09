import { useSearchParams } from "react-router-dom";
import PostList from "../components/PostList";
import { useClerk } from "@clerk/clerk-react";
import Pagination from "../components/Pagination";
import { usePosts } from "../contexts/PostsContext";
import { useEffect } from "react";

import { useAdmin } from "../contexts/Admin";
import Category from "../components/Category";
import Loading from "../components/Loading";

export default function HomePage() {
  const {
    posts,
    totalHomePages,
    isLoading,
    totalHomePosts,
    setSortHomeType,
    sortHomeType,
  } = usePosts();
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Category />
          <div className="flex items-center justify-between mb-3">
            <h1>كل الاعلانات : ({totalHomePosts})</h1>
            <div>
              <span>فرز حسب :</span>
              <select
                defaultValue={sortHomeType}
                onChange={(e) => setSortHomeType(e.target.value)}
              >
                <option value="">من الاحدث الى الاقدم</option>
                <option value="asc">من الاقدم الى الاحدث</option>
              </select>
            </div>
          </div>
          <PostList posts={posts} />
          <Pagination totalPages={totalHomePages} pageName="home" />
        </>
      )}
    </>
  );
}

export async function PostsLoader() {
  // try {
  // const params = new URLSearchParams(window.location.search);
  // console.log(params.get("page"));
  // const data = await axios.get("http://localhost:2000/api/posts");
  // return data;
  // } catch (error) {
  //   console.log(error);
  // }
}
