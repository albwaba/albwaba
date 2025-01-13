import React from "react";
import { CgDanger } from "react-icons/cg";
import { Link } from "react-router-dom";
import { formatDistance } from "date-fns";
import { ar } from "date-fns/locale/ar";

export const RejectItem = ({ item }) => {
  console.log(item);

  return (
    <div class="w-full p-3  bg-background rounded flex items-start gap-1">
      <div>
        <CgDanger size={20} color="red" />
      </div>
      <div class="pl-3">
        {item.messages.length > 1 ? (
          <p
            tabindex="0"
            class="text-sm text-text tracking-wide font leading-tight"
          >
            نشكرك على اهتمامك بإدراج إعلانك{" "}
            <Link to="/my-posts?state=rejectedPosts" className="text-accent">
              {item.postName}
            </Link>{" "}
            للأسف، لن يتم نشر إعلانك في الوقت الحالي لعدة اسباب{" "}
            {item.messages.map((m, i) => (
              <>
                {`(${i + 1})`} <strong>{m.name}</strong> {m.message}{" "}
              </>
            ))}
          </p>
        ) : (
          <p tabindex="0" class="text-sm  tracking-wide font leading-tight">
            نشكرك على اهتمامك بإدراج إعلانك{" "}
            <Link to="/my-posts?state=rejectedPosts" className="text-accent">
              {item.postName}
            </Link>{" "}
            للأسف، لن يتم نشر إعلانك في الوقت الحالي بسبب{" "}
            <strong>{item.messages[0].name}</strong> {item.messages[0].message}{" "}
          </p>
        )}
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
