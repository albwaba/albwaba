import React from "react";
import { RejectItem } from "./rejectItem";
import { PendingItem } from "./pendingItem";
import { ApproveItem } from "./ApproveItem";
import { UpdateItem } from "./UpdateItem";

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
