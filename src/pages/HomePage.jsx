import { useSearchParams } from "react-router-dom";
import PostList from "../components/PostList";
import { useClerk } from "@clerk/clerk-react";
import Pagination from "../components/Pagination";
import { usePosts } from "../contexts/PostsContext";
import { useEffect } from "react";

import { useAdmin } from "../contexts/Admin";
import Category from "../components/Category";
import Loading from "../components/Loading";

export default function HomePage({ title }) {
  const {
    posts,
    totalHomePages,
    isLoading,
    totalHomePosts,
    setSortHomeType,
    sortHomeType,
  } = usePosts();

  useEffect(() => {
    document.title = title;
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Category />
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-text">كل الاعلانات : ({totalHomePosts})</h1>
            <div>
              <span className="text-text">فرز حسب </span>
              <select
                className="bg-background border border-solid border-border rounded-sm text-text"
                defaultValue={sortHomeType}
                onChange={(e) => setSortHomeType(e.target.value)}
              >
                <option className="text-text" value="">
                  من الاحدث الى الاقدم
                </option>
                <option className="text-text" value="asc">
                  من الاقدم الى الاحدث
                </option>
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
