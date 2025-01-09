import React, { useEffect } from "react";
import Category from "../components/Category";
import { usePosts } from "../contexts/PostsContext";
import Loading from "../components/Loading";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";

export default function FilterResult({ title }) {
  const {
    filterPosts,
    totalSearchPages,
    isLoading,
    querySearch,
    totalSearchPosts,
    sortSearchType,
    setSortSearchType,
  } = usePosts();

  useEffect(() => {
    document.title = title;
  }, []);
  return (
    <>
      <Category />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="flex items-center justify-between mb-3">
            <h1 className="mb-3">
              نتائج البحث عن {querySearch} : ({totalSearchPosts})
            </h1>
            <div>
              <span>فرز حسب :</span>
              <select
                defaultValue={sortSearchType}
                onChange={(e) => setSortSearchType(e.target.value)}
              >
                <option value="">من الاحدث الى الاقدم</option>
                <option value="asc">من الاقدم الى الاحدث</option>
              </select>
            </div>
          </div>
          <PostList posts={filterPosts} />
          <Pagination totalPages={totalSearchPages} pageName="search" />
        </>
      )}
    </>
  );
}
