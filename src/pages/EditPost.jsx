import React from "react";
import PostForm from "../components/form/PostForm";
import axios from "axios";
import {
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { postFormValidator } from "../helper/formValidator";
import toast from "react-hot-toast";
import { baseApi } from "../api/posts";
import Loading from "../components/Loading";

export default function EditPost({ title }) {
  const { data } = useLoaderData();
  const errors = useActionData();
  const { state } = useNavigation();
  const isLoading = state === "submitting" || "loading";
  useEffect(() => {
    document.title = title;
  }, []);
  return isLoading ? <Loading /> : <PostForm errors={errors} />;
}

export async function loader({ request: { signal }, params: { postId } }) {
  const post = await baseApi.get(`post/${postId}`, { signal });
  return post;
}
export async function action({ request, params: { postId } }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const errors = postFormValidator({ ...data });
  if (Object.keys(errors).length > 0) {
    const errEl = document.getElementById(Object.keys(errors)[0]);
    errEl?.scrollIntoView({ behavior: "smooth" });
    return errors;
  }
  const post = {
    postName: formData.get("postName"),
    realEstate: {
      name: formData.get("realEstate"),
      area: formData.get("realStateArea"),
      realEstateType: formData.get("realEstateType") || "",
      realEstateFor: formData.get("realEstateFor") || "",
      furnished: formData.get("furnished") || "",
      numOfRooms: formData.get("numOfRooms") || "",
      numOfBathrooms: formData.get("numOfBathrooms") || "",
      facade: formData.get("facade") || "",
    },
    description: formData.get("description"),
    address: JSON.parse(formData.get("address")),
    phoneNumber: formData.get("phoneNumber"),
    price: Number(formData.get("price").split(",").join("")),
    images: JSON.parse(formData.get("images")),
    userId: localStorage.getItem("user-id"),
  };

  try {
    await baseApi.put(`posts/${postId}`, post);
  } catch (error) {
    console.log(error);
  }
  toast.success("تم تحديث الاعلان");
  return redirect("/home");
}
