import { formatDistance } from "date-fns";
import React from "react";
import { FcOk } from "react-icons/fc";
import { Link } from "react-router-dom";
import { ar } from "date-fns/locale/ar";

export default function ApproveItem({ item }) {
  return (
    <div class="w-full p-3  bg-white rounded flex items-start gap-1">
      <div>
        <FcOk size={20} />
      </div>
      <div class="pl-3">
        <p tabindex="0" class="text-sm  tracking-wide font leading-tight">
          تم قبول إعلانك{" "}
          <Link to={`/post/${item.postId}`} className="text-accent">
            {item.postName}
          </Link>{" "}
          بنجاح ، وإضافته إلى قائمة العقارات المتاحة على موقعنا
        </p>
        <p
          tabindex="0"
          class="focus:outline-none text-xs leading-3 pt-1 text-gray-500"
        >
          قبل {formatDistance(item.createdAt, new Date(), { locale: ar })}
        </p>
      </div>
    </div>
  );
}
