import { formatDistance } from "date-fns";
import React from "react";
import { CgTime } from "react-icons/cg";
import { Link } from "react-router-dom";
import { ar } from "date-fns/locale/ar";

export const PendingItem = ({ item }) => {
  return (
    <div class="w-full p-3  bg-white rounded flex items-start gap-1">
      <div>
        <CgTime size={20} />
      </div>
      <div class="pl-3">
        <p tabindex="0" class="text-sm  tracking-wide font leading-tight">
          نشكرك على اهتمامك بإدراج إعلانك{" "}
          <Link to="my-posts?state=pendingPosts" className="text-accent">
            {item.postName}
          </Link>{" "}
          على موقعنا. نود إعلامك بأننا نقوم بمراجعة جميع الإعلانات للتأكد من
          مطابقتها لمعايير الجودة العالية التي نحرص عليها.
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
};
