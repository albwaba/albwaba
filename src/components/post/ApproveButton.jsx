import React from "react";

export default function ApproveButton({ post, approvPost, isLoading }) {
  return (
    <>
      <button
        onClick={() => approvPost(post)}
        type="button"
        disabled={isLoading}
        // onClick={() => deletePost(post._id)}

        className={`${"font-bold rounded-sm border  border-dashed  border-border text-green-500 w-fit p-2"} ${
          isLoading ? "bg-accentHover cursor-wait" : ""
        }`}
      >
        تفعيل الإعلان
      </button>
    </>
  );
}
