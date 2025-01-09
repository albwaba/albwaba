import React, { useEffect, useState } from "react";

import NotificationList from "../components/notification/NotificationList";
import { useAuth, useClerk } from "@clerk/clerk-react";
import { baseApi } from "../api/posts";

export default function Notification() {
  const [notifications, setNotifications] = useState([]);
  const { user } = useClerk();
  const { getToken } = useAuth();
  useEffect(() => {
    const handeleGetNotifications = async () => {
      const token = await getToken();
      const data = await baseApi.get(`user/notifications/${user.id}`);
      setNotifications(data.data.notifications);
    };
    handeleGetNotifications();
  }, []);
  return (
    <div class=" bg-background">
      <div class="flex items-center justify-between">
        <h1 class=" text-2xl font-semibold leading-6 text-gray-800 mb-3">
          كل الإشعارات
        </h1>
      </div>
      <NotificationList items={notifications} />
    </div>
  );
}

// export async function NotifcaLoader({
//   request: { signal },
//   params: { userId },
// }) {
//   const { getToken } = useAuth();

//   const token = await getToken();
//   console.log(token);

//   const notification = await axios.get(
//     "http://localhost:2000/api/user/notifications",
//     {
//       signal,
//     }
//   );
//   return notification;
// }
