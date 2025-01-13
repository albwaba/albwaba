import React, { useEffect, useState } from "react";

import NotificationList from "../components/notification/NotificationList";
import { useAuth, useClerk } from "@clerk/clerk-react";
import { baseApi } from "../api/posts";
import Loading from "../components/Loading";

export default function Notification({ title }) {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useClerk();
  const { getToken } = useAuth();
  useEffect(() => {
    const handeleGetNotifications = async () => {
      setIsLoading(true);
      const token = await getToken();
      const data = await baseApi.get(`user/notifications/${user.id}`);
      setNotifications(data.data.notifications);
      setIsLoading(false);
    };
    handeleGetNotifications();
    document.title = title;
  }, []);
  return (
    <div class=" bg-background">
      <div class="flex items-center justify-between">
        <h1 class=" text-2xl font-semibold leading-6 text-text mb-3">
          كل الإشعارات
        </h1>
      </div>
      {isLoading ? <Loading /> : <NotificationList items={notifications} />}
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
