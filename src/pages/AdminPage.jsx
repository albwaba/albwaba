import React, { useEffect, useState } from "react";
import { useAdmin } from "../contexts/Admin";
import NotFound from "./NotFound";
import PostsImgSlider from "../components/imgsSlider/PostsImgSlider";
import RejectButton from "../components/admin/RejectButton";

export default function AdminPage({ title }) {
  const { isAdmin, handeleGetPendingPosts, handeleApprovePost } = useAdmin();
  const [pendingPosts, setPendingPosts] = useState([]);
  const fetchPendingPosts = async () => {
    try {
      const posts = await handeleGetPendingPosts();
      setPendingPosts(posts);
    } catch (error) {
      console.error("Failed to fetch pending posts", error);
    }
  };

  useEffect(() => {
    if (!isAdmin) return;
    fetchPendingPosts();
    document.title = title;
  }, []);

  if (!isAdmin) {
    return <NotFound />;
  }

  return (
    <div className="grid grid-cols-1 gap-2">
      {pendingPosts.map((post) => (
        <div className=" shadow-[0px_4px_20px_rgba(0,0,0,0.1)] p-4  rounded dark:bg-[#353a3c]">
          <div className="flex gap-2 justify-between max-lg:flex-col">
            <div className="w-52 h-40">
              <PostsImgSlider imagesUrl={post.imagesUrl} />
            </div>
            <div className="mx-2  h-full flex flex-col justify-between">
              <div className="flex flex-col gap-2 text-text">
                <div>
                  <strong>{post.price} د.ل</strong>
                </div>
                <div>{post.address.cityName}</div>
                <div>{post.phoneNumber}</div>
              </div>
            </div>
            <div>
              <strong>اسم الاعلان</strong>
              <div> {post.postName} </div>
            </div>
            <div className="bas">
              <strong>الوصف</strong>
              <p>{post.description}</p>
            </div>
            <div className="flex flex-col justify-between max-lg:flex-row">
              <button
                onClick={() =>
                  handeleApprovePost(post.userId, post._id).then(() =>
                    fetchPendingPosts()
                  )
                }
                className="font-bold rounded-sm border  border-dashed  border-border text-green-500 w-fit p-2"
              >
                قبول الاعلان
              </button>
              <RejectButton post={post} fetchPendingPosts={fetchPendingPosts} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
