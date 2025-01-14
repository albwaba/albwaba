import { useAuth } from "@clerk/clerk-react";
import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import {
  addToFavorites,
  deleteFromFavorites,
  getSavedPosts,
} from "../api/posts";

const PostsContext = createContext();

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_SAVED_POSTS":
      return {
        savedPosts: payload,
        savedPostsIds: payload.map((post) => post._id),
      };
    case "DELETE_SAVED_POST":
      return {
        savedPosts: state.savedPosts.filter((post) => post._id !== payload),
        savedPostsIds: state.savedPostsIds.filter((id) => id !== payload),
      };
    case "ADD_SAVED_POST":
      return {
        savedPosts: [...state.savedPosts, payload],
        savedPostsIds: [...state.savedPostsIds, payload._id],
      };
  }
};

export default function FavoritesProvider({ children }) {
  const [{ savedPosts, savedPostsIds }, dispatch] = useReducer(reducer, {
    savedPosts: [],
    savedPostsIds: [],
  });
  const { getToken } = useAuth();
  useEffect(() => {
    const handeleGetSavedPosts = async () => {
      try {
        const token = await getToken();
        const posts = await getSavedPosts(token);

        dispatch({ type: "SET_SAVED_POSTS", payload: posts });
        // dispatch({ type: "SET_SAVED_POSTS_IDS" });
      } catch (error) {
        console.log(error.message);
      }
    };
    handeleGetSavedPosts();
  }, [getToken]);

  const handeleAddToFavorites = async (post) => {
    const { _id } = post;
    try {
      const token = await getToken();
      await addToFavorites(token, _id);
      // await getSavedPosts();

      dispatch({ type: "ADD_SAVED_POST", payload: post });
      toast.success("تمت الإضافة الى المفضلة");
    } catch (error) {
      console.log(error);
    }
  };

  const handeleDeleteFromFavorites = async (postId) => {
    try {
      const token = await getToken();
      await deleteFromFavorites(postId, token);

      dispatch({ type: "DELETE_SAVED_POST", payload: postId });
      toast.success("تمت الازالة الى المفضلة");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PostsContext.Provider
      value={{
        dispatch,
        savedPostsIds,
        handeleDeleteFromFavorites,
        savedPosts,
        handeleAddToFavorites,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}

export const usSavedePosts = () => {
  const contex = useContext(PostsContext);
  return contex;
};
