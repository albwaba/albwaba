import { postFormValidator } from "../helper/formValidator";
import PostForm from "../components/form/PostForm";
import { redirect, useActionData, useNavigation } from "react-router-dom";

import toast from "react-hot-toast";
import { baseApi } from "../api/posts";
import { useEffect } from "react";
import Loading from "../components/Loading";
import SpinnerFullPage from "../components/SpinnerFullPage";

export default function NewPost({ title }) {
  const errors = useActionData();
  const { state } = useNavigation();
  const isLoading = state === "submitting";
  useEffect(() => {
    document.title = title;
  }, []);
  return isLoading ? (
    <SpinnerFullPage actionType="new" />
  ) : (
    <PostForm errors={errors} actionType="new" />
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const errors = postFormValidator({ ...data });
  if (Object.keys(errors).length > 0) {
    const errEl = document.getElementById(Object.keys(errors)[0]);
    errEl?.scrollIntoView({ behavior: "smooth" });
    return errors;
  }
  const info = {
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
    const res = await baseApi.post("posts", info);
    if (res.status !== 200)
      return toast.error("حدث خطا اثناء نشر الإعلان يرجى إعادة المحاولة");

    if (res.status === 200) toast.success("تم نشر الاعلان");
    return redirect("/my-posts?state=pendingPosts");
  } catch (error) {
    console.log(error);
    return toast.error("حدث خطا اثناء نشر الإعلان يرجى إعادة المحاولة");
  }
}
