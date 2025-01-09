import React, { useEffect, useState } from "react";

import Modal from "./Modal";

// import Modal from "./Modal";
// import Modal from "react-modal";

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// };
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

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   role: { type: String, enum: ['user', 'admin'], default: 'user' },
//   notifications: [{
//     message: String,
//     read: { type: Boolean, default: false },
//     createdAt: { type: Date, default: Date.now }
//   }]
//   // الحقول الأخرى
// });

// const User = mongoose.model('User', userSchema);
