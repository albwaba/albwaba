import React, { useState } from "react";
import RejectModal from "./rejectModal";

export default function RejectButton({ post, fetchPendingPosts }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setModalOpen(true)}
        className="font-bold rounded-sm border  border-dashed  border-border text-red-500 w-fit p-2"
      >
        رفض الاعلان
      </button>
      {modalOpen && (
        <RejectModal
          post={post}
          setModalOpen={setModalOpen}
          fetchPendingPosts={fetchPendingPosts}
        />
      )}
    </>
  );
}
