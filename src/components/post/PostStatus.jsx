import React from "react";
import DeleteButton from "../DeleteButton";
import { useMyPosts } from "../../contexts/MyPostsContext";
import ApproveButton from "./ApproveButton";
import { Link } from "react-router-dom";

export default function PostStatus({ post }) {
  const { deletePost, approvPost, isLoading, soldPost, deletePostForever } =
    useMyPosts();

  const { status } = post;
  const isApproved = status === "approved";

  let statusText;
  switch (status) {
    case "pending":
      statusText = { text: "غير فعال - في انتظار قبول", color: "orange" };
      break;
    case "rejected":
      statusText = { text: "غير فعال - مرفوض", color: "red" };
      break;
    case "sold":
      statusText = { text: "غير فعال - مباع", color: "green" };
      break;
    case "deleted":
      statusText = { text: "غير فعال - محذوف", color: "red" };
      break;
    default: {
      statusText = { text: "فعال", color: "green" };
    }
  }
  return (
    <>
      <div className="text-text">
        حالة الاعلان : {""}
        <strong className={`text-${statusText.color}-500 `}>
          {statusText.text}
        </strong>
      </div>
      {status === "deleted" ? (
        <div className="flex gap-2">
          <DeleteButton
            post={post}
            isApproved={isApproved}
            deletePostForever={deletePostForever}
          />
          <ApproveButton
            post={post}
            approvPost={approvPost}
            isLoading={isLoading}
          />
        </div>
      ) : status === "rejected" ? (
        <div className="flex gap-2">
          <DeleteButton
            post={post}
            isApproved={isApproved}
            deletePostForever={deletePostForever}
          />
          <Link
            to={`/post/edit/${post._id}`}
            className="font-bold rounded-sm border  border-dashed  border-border text-red-500 w-fit p-2"
          >
            تعديل الإعلان
          </Link>
        </div>
      ) : status === "sold" || "pending" ? (
        <>
          <DeleteButton
            post={post}
            deletePostForever={deletePostForever}
            soldPost={soldPost}
            isApproved={isApproved}
            deletePost={deletePost}
          />
        </>
      ) : (
        <>
          <DeleteButton
            post={post}
            isApproved={isApproved}
            deletePost={deletePost}
          />
        </>
      )}
    </>
  );
}
