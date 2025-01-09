import React, { useRef } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
import FormGroup from "../FormGroup";
import ImgUploader from "../ImgUploader";
import Map from "../Map";
import SearchCityBar from "../SearchCityBar";
import SpinnerFullPage from "../SpinnerFullPage";
export default function PostForm({ errors, post, actionType }) {
  const { state } = useNavigation();
  const isSubmitting = state === "submitting";
  const priceRef = useRef();

  const onchange = () => {
    console.log(priceRef);

    priceRef.current.value = priceRef.current.value
      .replace(/\D/g, "")
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="container relative">
        {/* {isSubmitting && <SpinnerFullPage />} */}
        <h1 className="text-2xl text-text">تفاصيل الإعلان</h1>
        <Form
          // encType="multipart/form-data"
          method="POST"
          action={actionType === "edit" ? `/post/edit/${post?._id}` : "/form"}
          className=" rounded shadow-lg p-4 mb-6"
        >
          <div className="grid gap-4 gap-y-4 text-sm grid-cols-1 md:grid-cols-4">
            <div className="md:col-span-5">
              <label
                className="text-text font-medium text-base md:text-lg"
                htmlFor="postName"
              >
                أسم الإعلان
              </label>
              <input
                type="text"
                defaultValue={post?.postName}
                name="postName"
                id="postName"
                className=" h-10 border mt-1 rounded px-4 w-full outline-0 focus-within:border-accent text-text border-border bg-background"
              />
              {errors?.postName && (
                <p className="text-red-400">{errors.postName.message}</p>
              )}
            </div>
            <FormGroup errors={errors} />
            <div className="md:col-span-5">
              <h3 className="text-text font-medium text-base md:text-lg tracking-wide">
                هل العقار
              </h3>

              <ul className="grid w-full gap-6 grid-cols-3 mt-1">
                <li>
                  <input
                    type="radio"
                    id="commercial"
                    name="realEstateType"
                    className=" text-text hidden peer"
                    value="commercial"
                  />
                  <label
                    htmlFor="commercial"
                    className="text-base font-normal lg:text-lg block w-full p-5  text-text bg-background border border-border rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
                  >
                    تجاري
                  </label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="residential"
                    name="realEstateType"
                    className=" text-text hidden peer"
                    value="residential"
                  />
                  <label
                    htmlFor="residential"
                    className="text-base font-normal lg:text-lg block w-full p-5  text-text bg-background border border-border rounded-lg cursor-pointer peer-checked:border-accent peer-checked:text-accent hover:text-gray-600 hover:bg-accentHover peer-checked:bg-accentHover"
                  >
                    سكني
                  </label>
                </li>
              </ul>
            </div>
            <div className="md:col-span-5">
              <label
                className="text-text font-medium text-base md:text-lg"
                htmlFor="description"
              >
                وصف العقار
              </label>
              <textarea
                type="text"
                defaultValue={post?.description}
                name="description"
                id="description"
                className="border mt-1 rounded p-2 w-full bg-background outline-0 border-border focus-within:border-accent text-text"
                rows={4}
              />
              {errors?.description && (
                <p className="text-red-400">{errors.description.message}</p>
              )}{" "}
            </div>
            <ImgUploader />
            {errors?.imgae && (
              <p className="text-red-400 text-center">{errors.imgae.message}</p>
            )}

            <div className="md:col-span-5">
              <SearchCityBar />
              {errors?.city && (
                <p className="text-red-400 ">{errors.city.message}</p>
              )}
            </div>
            <div className="h-96 md:col-span-5 border border-border relative">
              <Map />
            </div>
            <div className=" md:col-span-2">
              <label
                className="text-text font-medium text-base md:text-lg"
                htmlFor="price"
              >
                السعر ( د.ل )
              </label>
              <input
                defaultValue={post?.price}
                type="text"
                name="price"
                ref={priceRef}
                onChange={onchange}
                id="price"
                className=" h-10 border mt-1 rounded px-4 w-full outline-0 focus-within:border-accent text-text border-border bg-background"
              />
              {errors?.price && (
                <p className="text-red-400 ">{errors.price.message}</p>
              )}
            </div>
            <div className=" md:col-span-2">
              <label
                className="text-text font-medium text-base md:text-lg"
                htmlFor="phoneNumber"
              >
                رقم الهاتف
              </label>
              <input
                type="number"
                name="phoneNumber"
                id="phoneNumber"
                defaultValue={post?.phoneNumber}
                className=" h-10 border mt-1 rounded px-4 w-full outline-0 focus-within:border-accent text-text border-border bg-background"
              />
              {errors?.phoneNumber && (
                <p className="text-red-400 ">{errors.phoneNumber.message}</p>
              )}
            </div>
            <div className="md:col-span-5 text-right">
              <button
                type="submit"
                className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded"
              >
                {actionType === "edit" ? "تحديث الاعلان" : "نشر الاعلان"}
              </button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
