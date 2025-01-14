import { useState } from "react";

import Modal from "./Modal";
export default function DeleteButton({
  isApproved,
  post,
  deletePost,
  approvPost,
  soldPost,
  deletePostForever,
}) {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      {
        modalIsOpen && (
          <Modal
            post={post}
            deletePostForever={deletePostForever}
            isApproved={isApproved}
            setIsOpen={setIsOpen}
            deletePost={deletePost}
            approvPost={approvPost}
            soldPost={soldPost}
          />
        )
        //   ):
      }
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        // onClick={() => deletePost(post._id)}
        className="font-bold rounded-sm border  border-dashed  border-border text-red-500 w-fit p-2"
      >
        حذف الإعلان
      </button>
    </>
  );
}
