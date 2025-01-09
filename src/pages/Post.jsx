import axios from "axios";
import ImgSlider from "../components/imgsSlider/ImgSlider";
import PostDescription from "../components/post/PostDescription";
import PostDetails from "../components/post/PostDetails";
import PostOwnerInfo from "../components/post/PostOwnerInfo";
import { useLoaderData, useNavigation } from "react-router-dom";

import LogoSpinner from "../components/LogoSpinner";
import NotFound from "./NotFound";
import { baseApi } from "../api/posts";

export default function Post() {
  const { data, status } = useLoaderData();
  const { state } = useNavigation();
  if (status === 204) return <NotFound />;
  const isLoading = state === "loading";
  const {
    _id,
    address,
    description,
    phoneNumber,
    postName,
    price,
    realEstate,
    images,
    userId,
  } = data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 grid-rows-[repeat(auto-fill_,minmax(0,1fr))] divide-y-2 ">
      <div className="col-start-1 ">
        <ImgSlider images={images} />
      </div>
      <PostOwnerInfo post={data} />
      <PostDetails realEstate={realEstate} />
      <PostDescription description={description} />
    </div>
  );
}

export async function postLoader({ request: { signal }, params: { postId } }) {
  const userId = localStorage.getItem("user-id");
  console.log(userId);

  const post = await baseApi.get(`post/${postId}`, {
    signal,
    params: { userId },
  });
  return post;
}
