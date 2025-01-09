import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import toast from "react-hot-toast";
import { useFetcher, useNavigation } from "react-router-dom";
import { baseApi, getMyPosts } from "../api/posts";

const MyPosts = createContext();
const initialState = {
  rejectedPosts: [],
  pendingPosts: [],
  totalViews: 0,
  deletedPosts: [],
  soldPosts: [],
  approvedPosts: [],
};
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_INITIAL_STATE": {
      return {
        rejectedPosts: payload.filter((post) => post.status === "rejected"),
        pendingPosts: payload.filter((post) => post.status === "pending"),
        approvedPosts: payload.filter((post) => post.status === "approved"),
        deletedPosts: payload.filter((post) => post.status === "deleted"),
        soldPosts: payload.filter((post) => post.status === "sold"),
        totalViews: payload.reduce((acc, curr) => acc + curr.views.length, 0),
      };
    }
    case "APPROVE_POST": {
      return {
        ...state,
        approvedPosts: [...state.approvedPosts, payload],
        deletedPosts: state.deletedPosts.filter(
          (post) => post._id !== payload._id
        ),
      };
    }
    case "DELETE_POST": {
      return {
        ...state,
        approvedPosts: state.approvedPosts.filter(
          (post) => post._id !== payload._id
        ),
        deletedPosts: [...state.deletedPosts, payload],
      };
    }
    case "SOLD_POST": {
      return {
        ...state,
        approvedPosts: state.approvedPosts.filter(
          (post) => post._id !== payload._id
        ),
        soldPosts: [...state.soldPosts, payload],
      };
    }
    case "DELETE_POST_FOREVER": {
      if (payload.status === "rejected")
        return {
          ...state,
          rejectedPosts: state.rejectedPosts.filter(
            (post) => post._id !== payload._id
          ),
        };
      if (payload.status === "deleted")
        return {
          ...state,
          deletedPosts: state.deletedPosts.filter(
            (post) => post._id !== payload._id
          ),
        };
      if (payload.status === "pending")
        return {
          ...state,
          pendingPosts: state.pendingPosts.filter(
            (post) => post._id !== payload._id
          ),
        };
      if (payload.status === "sold")
        return {
          ...state,
          soldPosts: state.soldPosts.filter((post) => post._id !== payload._id),
        };
    }
  }
};

export default function MyPostsProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [isLoading, setIsLoading] = useState(false);
  const { getToken } = useAuth();
  // useEffect(() => {
  const handeleGetMyPosts = async () => {
    try {
      // setIsLoading(true);
      // const token = await getToken();
      const posts = await getMyPosts();
      console.log(true);

      dispatch({ type: "SET_INITIAL_STATE", payload: posts });
      // setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  // }, []);

  const deletePost = async (post) => {
    try {
      setIsLoading(true);
      const deletedPost = await baseApi.patch(`myPosts/delete/${post._id}`);
      toast.success("تم حذف الإعلان بنجاح");
      dispatch({ type: "DELETE_POST", payload: deletedPost.data });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("حدث خطأ ما يرجي إعادة المحاولة مرة اخرى");
      setIsLoading(false);
    }
  };

  const approvPost = async (post) => {
    try {
      setIsLoading(true);
      const approvedPost = await baseApi.patch(`myPosts/approve/${post._id}`);
      toast.success("تم تفعيل الإعلان بنجاح");
      dispatch({ type: "APPROVE_POST", payload: approvedPost.data });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("حدث خطأ ما يرجي إعادة المحاولة مرة اخرى");
      setIsLoading(false);
    }
  };
  const soldPost = async (post) => {
    try {
      setIsLoading(true);
      const theSoldPost = await baseApi.patch(`myPosts/sold/${post._id}`);
      dispatch({ type: "SOLD_POST", payload: theSoldPost.data });
      toast.success("تم حذف الإعلان المباع بنجاح");
    } catch (error) {
      console.log(error);
    }
  };

  const deletePostForever = async (post) => {
    try {
      await baseApi.delete(`myPosts/delete/${post._id}`);
      dispatch({ type: "DELETE_POST_FOREVER", payload: post });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MyPosts.Provider
      value={{
        state,
        isLoading,
        handeleGetMyPosts,
        deletePost,
        approvPost,
        soldPost,
        deletePostForever,
      }}
    >
      {children}
    </MyPosts.Provider>
  );
}

export const useMyPosts = () => {
  const contex = useContext(MyPosts);
  return contex;
};
