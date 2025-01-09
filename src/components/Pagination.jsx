import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { usePosts } from "../contexts/PostsContext";

export default function Pagination({ totalPages, pageName }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");
  const {
    currentHomePage,
    currentSearchPage,
    setCurrentHomePgae,
    setCurrentSearchPgae,
  } = usePosts();
  const currentPage = pageName === "home" ? currentHomePage : currentSearchPage;
  const incrementPage = (num) => {
    if (pageName === "home") {
      setCurrentHomePgae(num);
    } else {
      setCurrentSearchPgae(num);
    }
  };
  const deccrementPage = (num) => {
    if (pageName === "home") {
      setCurrentHomePgae(num);
    } else {
      setCurrentSearchPgae(num);
    }
  };
  return (
    <div className="flex items-center justify-center pt-2">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <button
            onClick={() => {
              if (currentPage == totalPages || (!currentPage && totalPages < 2))
                return;
              if (!currentPage) {
                incrementPage(2);
                return;
              }
              incrementPage(currentPage + 1);
            }}
            // to={
            //   currentPage == totalPages || (!currentPage && totalPages == 1)
            //     ? `/${pageName}`
            //     : !currentPage
            //     ? `/${pageName}?page=2`
            //     : `/${pageName}?page=${Number(currentPage) + 1}`
            // }
            // href="#"
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-text bg-background border border-e-0 border-border rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            التالي
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => (
          <li key={i}>
            <button
              key={i}
              onClick={() => {
                incrementPage(i + 1);
              }}
              className={`${"flex items-center justify-center px-3 h-8 leading-tight text-text bg-background border border-border hover:bg-gray-100   dark:hover:bg-gray-700 dark:hover:text-white  dark:bg-[#353a3c]"}  ${
                !currentPage && i == 0
                  ? "!bg-secondary"
                  : currentPage == i + 1
                  ? "!bg-secondary"
                  : ""
              } `}
            >
              {i + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => {
              if (!currentPage || currentPage == 1) {
                return;
              }
              deccrementPage(currentPage - 1);
            }}
            className="flex items-center justify-center px-3 h-8 leading-tight text-text bg-background border border-border rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800  dark:hover:bg-gray-700 dark:hover:text-white"
          >
            السابق
          </button>
        </li>
      </ul>
    </div>
  );
}
