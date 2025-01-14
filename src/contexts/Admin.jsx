import { useAuth, useClerk } from "@clerk/clerk-react";
import { createContext, useContext, useEffect, useState } from "react";
import { baseApi } from "../api/posts";

const Admin = createContext();

export default function AdminProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const { user } = useClerk();
  const { getToken } = useAuth();

  useEffect(() => {
    if (user.publicMetadata.role === "admin") {
      setIsAdmin(true);
    }
    if (
      !localStorage.getItem("user-id") ||
      localStorage.getItem("user-id") !== user.id
    )
      localStorage.setItem("user-id", user.id);
  }, []);

  const handeleGetPendingPosts = async () => {
    const token = await getToken();
    const posts = await baseApi.get("admin/posts", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        mode: "cors",
      },
    });
    return posts.data;
  };

  const handeleRejectPost = async (userId, postId, rejectionReasons) => {
    const token = await getToken();
    const reject = await baseApi.patch(
      `admin/posts/reject/${postId}`,
      { rejectionReasons, userId },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          mode: "cors",
        },
      }
    );
  };

  const handeleApprovePost = async (userId, postId) => {
    const token = await getToken();
    const approve = await baseApi.patch(
      `admin/posts/approve/${postId}`,

      { userId },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          mode: "cors",
        },
      }
    );
  };

  return (
    <Admin.Provider
      value={{
        isAdmin,
        handeleGetPendingPosts,
        handeleRejectPost,
        handeleApprovePost,
      }}
    >
      {children}
    </Admin.Provider>
  );
}

export const useAdmin = () => {
  const context = useContext(Admin);
  return context;
};
