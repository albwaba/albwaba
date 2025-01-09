import axios from "axios";

import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PostList from "../components/PostList";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { useClerk } from "@clerk/clerk-react";
import { da } from "date-fns/locale";
import ShareList from "../components/ShareList";
import { baseApi } from "../api/posts";
export default function Profile() {
  const { data } = useLoaderData();
  const [openDailog, setOpenDailog] = useState(false);

  return (
    <>
      <div className="flex justify-between shadow-[0px_4px_20px_rgba(0,0,0,0.1)] p-2  items-center">
        <div className="flex gap-2 items-center">
          <img
            className="rounded-full w-20"
            src="https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18ya3NqOE5udWp6aVlKUjVEbjMzMTJGV3Y2cmMiLCJyaWQiOiJ1c2VyXzJteVpKNTRNUk5jVXpFdDdUOWdzSThqY2k5ViJ9"
            alt=""
          />
          <div className="flex flex-col gap-1">
            <h1>
              {data.firstName} {data.lastName}
            </h1>
            <p>
              عضو منذ <span>2023 - 1 -3</span>
            </p>
            <p>الإعلانات ({data.posts.length})</p>
            <p>مشاهدات ({data.totalViews})</p>
          </div>
        </div>

        <div>
          <button
            onClick={() => setOpenDailog(true)}
            className="flex items-center justify-center gap-2 basis-1/4  border border-border rounded transition hover:bg-accentHover p-2 "
          >
            <span className="font-semibold"> مشاركة</span>
            <FaRegShareFromSquare />
          </button>
        </div>
      </div>
      {data.posts.length > 0 && <PostList posts={data.posts} />}
      <ShareList
        openDailog={openDailog}
        setOpenDailog={setOpenDailog}
        type="profile"
      />
    </>
  );
}

export async function profileLoader({
  request: { signal },
  params: { userId },
}) {
  const userData = await baseApi.get(`profile/${userId}`, {
    signal,
  });
  return userData;
}
