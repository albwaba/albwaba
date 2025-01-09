import axios from "axios";
import { baseApi } from "./posts";

export async function getNotSeenNotifications(userId) {
  try {
    return await baseApi
      .get(`user/notifications/${userId}/count`)
      .then((res) => res.data.count);
  } catch (error) {
    console.log(error);
  }
}
