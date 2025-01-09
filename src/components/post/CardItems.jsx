import React, { useState } from "react";
import { useMyPosts } from "../../contexts/MyPostsContext";
import { Link, useSearchParams } from "react-router-dom";
import PostList from "../PostList";

export default function CardItems() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeState = searchParams.get("state");
  const { state } = useMyPosts();
  return (
    <>
      <div className=" grid grid-cols-2 p-4 md:grid-cols-3 lg:grid-cols-4 gap-1 ">
        <Link className="bg-secondary rounded-lg flex flex-col-reverse items-center justify-between gap-5 p-4 ">
          <p className=" text-text">مشاهدات الإعلانات</p>
          <p className=" text-text font-bold">{state.totalViews}</p>
        </Link>
        <Link
          to={`/my-posts?state=${"approvedPosts"}`}
          className={`${
            activeState === "approvedPosts" ? "bg-accent" : "bg-secondary"
          } rounded-lg flex flex-col-reverse items-center justify-between gap-5 p-4`}
        >
          <p className=" text-text">الإعلانات الفعالة</p>
          <p className=" text-text font-bold">{state.approvedPosts?.length}</p>
        </Link>
        <Link
          to={`/my-posts?state=${"pendingPosts"}`}
          className={`${
            activeState === "pendingPosts" ? "bg-accent" : "bg-secondary"
          } rounded-lg flex flex-col-reverse items-center justify-between gap-5 p-4`}
        >
          <p className=" text-text">قيد المراجعة</p>
          <p className=" text-text font-bold">{state.pendingPosts?.length}</p>
        </Link>
        <Link
          to={`/my-posts?state=${"rejectedPosts"}`}
          className={`${
            activeState === "rejectedPosts" ? "bg-accent" : "bg-secondary"
          } rounded-lg flex flex-col-reverse items-center justify-between gap-5 p-4`}
        >
          <p className=" text-text">الإعلانات المرفوضة</p>
          <p className=" text-text font-bold">{state.rejectedPosts?.length}</p>
        </Link>
        <Link
          to={`/my-posts?state=${"soldPosts"}`}
          className={`${
            activeState === "soldPosts" ? "bg-accent" : "bg-secondary"
          } rounded-lg flex flex-col-reverse items-center justify-between gap-5 p-4`}
        >
          <p className=" text-text">الإعلانات المباعه</p>
          <p className=" text-text font-bold">{state.soldPosts?.length}</p>
        </Link>
        <Link
          to={`/my-posts?state=${"deletedPosts"}`}
          className={`${
            activeState === "deletedPosts" ? "bg-accent" : "bg-secondary"
          } rounded-lg flex flex-col-reverse items-center justify-between gap-5 p-4`}
        >
          <p className=" text-text">محذوف</p>
          <p className=" text-text font-bold">{state.deletedPosts?.length}</p>
        </Link>
      </div>
      <PostList posts={state[activeState]} />
    </>
  );
}
