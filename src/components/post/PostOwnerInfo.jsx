import { useState } from "react";
import { MdLocalPhone } from "react-icons/md";
import { FaHeart, FaRegShareFromSquare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Location from "./Location";
import ShareList from "../ShareList";
import { usSavedePosts } from "../../contexts/FavoritesContext";
export default function PostOwnerInfo({ post }) {
  const [openDailog, setOpenDailog] = useState(false);
  const { savedPostsIds, handeleAddToFavorites, handeleDeleteFromFavorites } =
    usSavedePosts();

  return (
    <>
      <div className="flex flex-col gap-3 pt-3 text-text divide-y-2 md:!border-t-0 md:pt-0">
        <div>
          <h1 className="font-bold">{post.postName}</h1>
          <p className="font-bold">{post.price}</p>
        </div>
        <div className="flex gap-3 justify-between pt-3">
          <button className="flex items-center justify-center gap-2 basis-1/4  border border-border rounded transition hover:bg-accentHover py-2  ">
            <Link to={`tel:${post.phoneNumber}`} className="font-semibold">
              أتصال
            </Link>
            <MdLocalPhone />
          </button>
          <button
            onClick={() => setOpenDailog(true)}
            className="flex items-center justify-center gap-2 basis-1/4  border border-border rounded transition hover:bg-accentHover py-2 "
          >
            <span className="font-semibold"> مشاركة</span>
            <FaRegShareFromSquare />
          </button>
          {savedPostsIds.includes(post._id) ? (
            <button
              onClick={() => handeleDeleteFromFavorites(post._id)}
              className="flex items-center justify-center gap-2 basis-1/2 max  border border-border rounded transition hover:bg-accentHover py-2 "
            >
              <span className="font-semibold"> إزالة من المفضله</span>
              <FaHeart color="red" />
            </button>
          ) : (
            <button
              onClick={() => handeleAddToFavorites(post)}
              className="flex items-center justify-center gap-2 basis-1/2 max  border border-border rounded transition hover:bg-accentHover py-2 "
            >
              <span className="font-semibold"> اضف الى المفضله</span>
              <FaRegHeart />
            </button>
          )}
        </div>
        <div className="pt-2">
          <h1 className="font-bold text-xl md:text-2xl mb-2">المعلن</h1>
          <Link
            to={`/profile/${post.userId}`}
            className="flex gap-2 pt-3 items-center"
          >
            <div>
              <img
                className="h-12 w-full rounded-full"
                src="https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18ya3NqOE5udWp6aVlKUjVEbjMzMTJGV3Y2cmMiLCJyaWQiOiJ1c2VyXzJsNENmVTRhUXBMZ21Dd2c0dTdham9DZ0syMSIsImluaXRpYWxzIjoiQUYifQ?width=80"
                alt="User profile picture"
              />
            </div>
            <div>
              <strong> عبد العزيز المعلن</strong>
              <div>
                عضو منذ
                <span>12-12-2022</span>
              </div>
            </div>
          </Link>
        </div>
        <h3>{post.address.cityName}</h3>
        <Location lat={post.address.lat} lng={post.address.lng} />
      </div>
      <ShareList
        openDailog={openDailog}
        setOpenDailog={setOpenDailog}
        type="post"
      />
    </>
  );
}
