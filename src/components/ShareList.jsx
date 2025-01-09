import React, { useState } from "react";
import { FaCopy, FaXmark } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
export default function ShareList({ openDailog, setOpenDailog, type }) {
  if (!openDailog) return <></>;
  const shareUrl = window.location.href;
  return (
    <>
      <div className="bg-white fixed z-[2244] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-1.5 px-4 rounded-lg max-sm:container">
        <div className="flex justify-between">
          <h2 className="text-text  font-bold ">
            قم بمشاركة {type === "profile" ? "الحساب" : "الإعلان"} !
          </h2>
          <button type="button" onClick={() => setOpenDailog(false)}>
            <FaXmark size={20} />
          </button>
        </div>
        <div class="bg-white w-full py-6 flex items-center gap-6 justify-evenly">
          <Link
            to={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            class="group transition-all duration-500 hover:-translate-y-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 93 92"
              fill="none"
            >
              <rect
                x="1.13867"
                width="91.5618"
                height="91.5618"
                rx="15"
                fill="#337FFF"
              />
              <path
                d="M57.4233 48.6403L58.7279 40.3588H50.6917V34.9759C50.6917 32.7114 51.8137 30.4987 55.4013 30.4987H59.1063V23.4465C56.9486 23.1028 54.7685 22.9168 52.5834 22.8901C45.9692 22.8901 41.651 26.8626 41.651 34.0442V40.3588H34.3193V48.6403H41.651V68.671H50.6917V48.6403H57.4233Z"
                fill="white"
              />
            </svg>
          </Link>

          <Link
            to={`https://x.com/intent/post?text=${shareUrl}`}
            class="group transition-all duration-500 hover:-translate-y-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 93 92"
              fill="none"
            >
              <rect
                x="0.138672"
                width="91.5618"
                height="91.5618"
                rx="15"
                fill="black"
              />
              <path
                d="M50.7568 42.1716L69.3704 21H64.9596L48.7974 39.383L35.8887 21H21L40.5205 48.7983L21 71H25.4111L42.4788 51.5869L56.1113 71H71L50.7557 42.1716H50.7568ZM44.7152 49.0433L42.7374 46.2752L27.0005 24.2492H33.7756L46.4755 42.0249L48.4533 44.7929L64.9617 67.8986H58.1865L44.7152 49.0443V49.0433Z"
                fill="white"
              />
            </svg>
          </Link>

          <Link
            to={`https://wa.me/?text=${shareUrl}`}
            class="group transition-all duration-500 hover:-translate-y-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 93 92"
              fill="none"
            >
              <rect
                x="1.13867"
                width="91.5618"
                height="91.5618"
                rx="15"
                fill="#00D95F"
              />
              <path
                d="M23.5068 66.8405L26.7915 54.6381C24.1425 49.8847 23.3009 44.3378 24.4211 39.0154C25.5413 33.693 28.5482 28.952 32.89 25.6624C37.2319 22.3729 42.6173 20.7554 48.0583 21.1068C53.4992 21.4582 58.6306 23.755 62.5108 27.5756C66.3911 31.3962 68.7599 36.4844 69.1826 41.9065C69.6053 47.3286 68.0535 52.7208 64.812 57.0938C61.5705 61.4668 56.8568 64.5271 51.5357 65.7133C46.2146 66.8994 40.6432 66.1318 35.8438 63.5513L23.5068 66.8405ZM36.4386 58.985L37.2016 59.4365C40.6779 61.4918 44.7382 62.3423 48.7498 61.8555C52.7613 61.3687 56.4987 59.5719 59.3796 56.7452C62.2605 53.9185 64.123 50.2206 64.6769 46.2279C65.2308 42.2351 64.445 38.1717 62.4419 34.6709C60.4388 31.1701 57.331 28.4285 53.6027 26.8734C49.8745 25.3184 45.7352 25.0372 41.8299 26.0736C37.9247 27.11 34.4729 29.4059 32.0124 32.6035C29.5519 35.801 28.2209 39.7206 28.2269 43.7514C28.2237 47.0937 29.1503 50.3712 30.9038 53.2192L31.3823 54.0061L29.546 60.8167L36.4386 58.985Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M54.9566 46.8847C54.5093 46.5249 53.9856 46.2716 53.4254 46.1442C52.8651 46.0168 52.2831 46.0186 51.7236 46.1495C50.8831 46.4977 50.3399 47.8134 49.7968 48.4713C49.6823 48.629 49.514 48.7396 49.3235 48.7823C49.133 48.8251 48.9335 48.797 48.7623 48.7034C45.6849 47.5012 43.1055 45.2965 41.4429 42.4475C41.3011 42.2697 41.2339 42.044 41.2557 41.8178C41.2774 41.5916 41.3862 41.3827 41.5593 41.235C42.165 40.6368 42.6098 39.8959 42.8524 39.0809C42.9063 38.1818 42.6998 37.2863 42.2576 36.5011C41.9157 35.4002 41.265 34.42 40.3825 33.6762C39.9273 33.472 39.4225 33.4036 38.9292 33.4791C38.4359 33.5546 37.975 33.7709 37.6021 34.1019C36.9548 34.6589 36.4411 35.3537 36.0987 36.135C35.7562 36.9163 35.5939 37.7643 35.6236 38.6165C35.6256 39.0951 35.6864 39.5716 35.8046 40.0354C36.1049 41.1497 36.5667 42.2144 37.1754 43.1956C37.6145 43.9473 38.0937 44.6749 38.6108 45.3755C40.2914 47.6767 42.4038 49.6305 44.831 51.1284C46.049 51.8897 47.3507 52.5086 48.7105 52.973C50.1231 53.6117 51.6827 53.8568 53.2237 53.6824C54.1018 53.5499 54.9337 53.2041 55.6462 52.6755C56.3588 52.1469 56.9302 51.4518 57.3102 50.6512C57.5334 50.1675 57.6012 49.6269 57.5042 49.1033C57.2714 48.0327 55.836 47.4007 54.9566 46.8847Z"
                fill="white"
              />
            </svg>
          </Link>

          <Link
            to={`https://t.me/share/url?url=${shareUrl}`}
            class="group transition-all duration-500 hover:-translate-y-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 92 93"
              fill="none"
            >
              <rect
                x="0.138672"
                y="1"
                width="91.5618"
                height="91.5618"
                rx="15"
                fill="#34AADF"
              />
              <path
                d="M25.0881 43.5652C25.0881 43.5652 43.716 35.7194 50.1765 32.9567C52.6532 31.8518 61.0518 28.3155 61.0518 28.3155C61.0518 28.3155 64.9282 26.7685 64.6052 30.5256C64.4974 32.0728 63.6361 37.4874 62.7747 43.3442C61.4825 51.6322 60.0827 60.6935 60.0827 60.6935C60.0827 60.6935 59.8674 63.2352 58.0369 63.6772C56.2065 64.1192 53.1914 62.1302 52.6532 61.6881C52.2223 61.3566 44.5774 56.3838 41.7778 53.9527C41.0241 53.2897 40.1627 51.9637 41.8854 50.4166C45.7618 46.7699 50.3919 42.2392 53.1914 39.3661C54.4836 38.04 55.7757 34.9459 50.3919 38.703C42.7469 44.1178 35.2096 49.201 35.2096 49.201C35.2096 49.201 33.4868 50.306 30.2565 49.3115C27.0261 48.317 23.2575 46.9909 23.2575 46.9909C23.2575 46.9909 20.6734 45.3334 25.0881 43.5652Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        <div className="flex items-center gap-2 rounded-md bg-primary p-2 justify-center">
          <button
            onClick={async () => {
              await navigator.clipboard.writeText(shareUrl);
              toast.success(
                `تم نسخ ${type === "profile" ? "الحساب" : "الإعلان"} بنجاح`
              );
            }}
            className="text-white "
          >
            إنسخ
          </button>
          <span className="text-white overflow-hidden text-ellipsis whitespace-normal">
            {shareUrl}
          </span>
        </div>
      </div>
      <div
        className={`${"fixed inset-0 backdrop-blur-sm bg-[#0f172acc] -z-10 transition-opacity opacity-0"} ${"opacity-100 !z-[2233]"}`}
      ></div>
    </>
  );
}
