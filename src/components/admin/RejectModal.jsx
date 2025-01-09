import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useAdmin } from "../../contexts/Admin";
import { FaXmark } from "react-icons/fa6";

export const RejectModal = ({ post, setModalOpen, fetchPendingPosts }) => {
  const { handeleRejectPost } = useAdmin();
  const [rejectReasons, setRejectReason] = useState({
    postId: post._id,
    postName: post.postName,
    messages: [],
  });
  const handeleChangeReason = (e) => {
    const { name, checked, value } = e.target;
    console.log(rejectReasons);

    setRejectReason((reasons) => {
      if (checked)
        return {
          ...reasons,
          messages: [...reasons?.messages, { name: name, message: value }],
        };
      return {
        ...reasons,
        messages: reasons.messages.filter((m) => m.name !== name),
      };
    });
  };

  return createPortal(
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-lg p-4">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute"
            >
              <FaXmark size={20} />
            </button>
            <div className="bg-white ">
              <div className="flex justify-end max-sm:flex-col-reverse items-center">
                <div className="mt-3 text-center sm:mr-4 sm:mt-0 sm:text-right">
                  <h3
                    className="text-base font-semibold text-gray-900"
                    id="modal-title"
                  >
                    رفض الاعلان
                  </h3>
                </div>

                <div className="mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mt-1">
              <p className="text-sm text-gray-500 text-right">
                أذكر السبب الذي تم الرفض بسببه
              </p>
            </div>
            <div className="flex flex-col gap-2 items-end mt-1 ">
              <div class="flex gap-1">
                <label
                  for="images"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-right "
                >
                  نرجو منك تزويدنا بصور أكثر وضوحًا للعقار، حيث أن الصور الجيدة
                  تلعب دورًا هامًا في جذب العملاء المحتملين
                </label>
                <input
                  id="images"
                  type="checkbox"
                  onChange={(e) => handeleChangeReason(e)}
                  name="عدم وضوح الصور"
                  value="نرجو منك تزويدنا بصور أكثر وضوحًا للعقار، حيث أن الصور الجيدة تلعب دورًا هامًا في جذب العملاء المحتملين"
                  class="w-4 h-4 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                ></input>
              </div>
              <div class="flex gap-1">
                <label
                  for="phoneNumber"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-right"
                >
                  يرجى التأكد من صحة رقم الهاتف المدخل في الإعلان، حيث أن هذا
                  الرقم هو وسيلة التواصل الأساسية بينك وبين العملاء المحتملين
                </label>
                <input
                  id="phoneNumber"
                  type="checkbox"
                  onChange={(e) => handeleChangeReason(e)}
                  name="مشكلة في رقم الهاتف"
                  value="يرجى التأكد من صحة رقم الهاتف المدخل في الإعلان، حيث أن هذا الرقم هو وسيلة التواصل الأساسية بينك وبين العملاء المحتملين"
                  class="w-4 h-4 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                ></input>
              </div>
              <div class="flex gap-1">
                <label
                  for="price"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-right"
                >
                  نرجو منك تحديث سعر العقار في إعلانك، حيث أن السعر هو أحد أهم
                  العوامل التي تؤثر على قرار الشراء
                </label>
                <input
                  id="price"
                  type="checkbox"
                  onChange={(e) => handeleChangeReason(e)}
                  name="تغيير في السعر"
                  value="نرجو منك تحديث سعر العقار في إعلانك، حيث أن السعر هو أحد أهم العوامل التي تؤثر على قرار الشراء"
                  class="w-4 h-4 dark:ring-offset-gray-800  dark:bg-gray-700 dark:border-gray-600"
                ></input>
              </div>
            </div>
            <div className="sm:flex sm:flex-row-reverse pt-1">
              <button
                type="button"
                disabled={rejectReasons?.messages.length === 0}
                onClick={() =>
                  handeleRejectPost(post.userId, post._id, rejectReasons).then(
                    () => fetchPendingPosts().then(() => setModalOpen(false))
                  )
                }
                className={`inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto 
                  ${rejectReasons.messages.length === 0 && "cursor-not-allowed"}
                  `}
              >
                رفض
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#app")
  );
};
