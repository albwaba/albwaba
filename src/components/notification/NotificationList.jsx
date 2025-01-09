import React from "react";
import { RejectItem } from "./RejectItem.jsx";
import { PendingItem } from "./PendingItem.jsx";
import { ApproveItem } from "./ApproveItem.jsx";
import { UpdateItem } from "./UpdateItem.jsx";

export default function NotificationList({ items }) {
  return (
    <>
      {items.map((item) => (
        <>
          {item.type === "rejected" ? (
            <RejectItem item={item} />
          ) : item.type === "pending" ? (
            <PendingItem item={item} />
          ) : item.type === "approved" ? (
            <ApproveItem item={item} />
          ) : (
            <UpdateItem item={item} />
          )}
        </>
      ))}
    </>
  );
}
