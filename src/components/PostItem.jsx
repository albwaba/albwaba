import React, { memo } from "react";
import { Link, useFetcher, useLocation, useNavigation } from "react-router-dom";
import SavePostButton from "./post/SavePostButton";

import SpinnerFullPage from "./SpinnerFullPage";
import { useMyPosts } from "../contexts/MyPostsContext";
import { addDays, formatDistance, getDate, getDay } from "date-fns";
import { ar } from "date-fns/locale";
import DeleteButton from "./DeleteButton";
import PostStatus from "./post/PostStatus";
function PostItem({ post }) {
  const createdAt = new Date(post.createdAt);
  const earlierDate = new Date();
  const expireDate = addDays(createdAt, 30);

  const expireDateText = formatDistance(
    new Date(
      expireDate.getFullYear(),
      expireDate.getMonth() + 1,
      expireDate.getDate()
    ),
    new Date(
      earlierDate.getFullYear(),
      earlierDate.getMonth() + 1,
      earlierDate.getDate()
    ),
    {
      addSuffix: true,
      locale: ar,
    }
  );

  const { pathname } = useLocation();
  const { state } = useNavigation();
  const isMyPosts = pathname.substring(1) === "my-posts";
  // const { deletePost } = useMyPosts();

  return (
    <div
      className={`${"flex justify-between flex-col shadow-[0px_4px_20px_rgba(0,0,0,0.1)] p-4  rounded dark:bg-[#353a3c]"} ${
        isMyPosts && "max-lg:flex-col"
      }`}
    >
      <Link to={`/post/${post._id}`} className=" flex flex-1">
        <div className="w-40 h-40 ">
          <img
            className="object-cover h-full w-full rounded"
            src={post.images[0]?.url}
            alt=""
          />
        </div>
        <div className="mx-2 flex-1 h-full flex flex-col justify-between">
          <div className="flex flex-col gap-2 text-text">
            <div> {post.postName}</div>
            <div>
              <strong>{post.price} د.ل</strong>
            </div>
            <div>{post.address.cityName}</div>
          </div>
        </div>
      </Link>
      <div className="flex  flex-col gap-2">
        {isMyPosts ? (
          <>
            <div>
              <span>عدد المشاهدات</span>:<strong> {post.views.length}</strong>
            </div>
            <div>
              ينتهي الاعلان في <strong>{expireDateText}</strong>
            </div>
            <PostStatus post={post} />
          </>
        ) : (
          <div className="flex justify-end">
            <SavePostButton post={post} />
          </div>
        )}
      </div>
    </div>
  );
}

export default PostItem;
