// import axios from "axios";
// import { useEffect, useState } from "react";
// // import { getSavedPosts } from "../../../server/src/controlles/postController";

// export default function useGetSavedPosts() {
//   const userId = localStorage.getItem("user-id");
//   const [savedPosts, setSavedPosts] = useState([]);
//   const [savedPostsId, setSavedPostsId] = useState([]);
//   useEffect(() => {
//     const getSavedPosts = async () => {
//       try {
//         const data = await axios.get(
//           `http://localhost:2000/api/posts/${userId}/favorites`
//         );
//         setSavedPosts((posts) => data.data);
//         setSavedPostsId(savedPosts.map((post) => post._id));
//       } catch (error) {
//         console.log(error.message);
//       }
//     };
//     getSavedPosts();
//   }, []);

//   const addToFavorites = async (postId) => {
//     try {
//       await axios.put("http://localhost:2000/api/posts/add/favorites", {
//         userId,
//         postId,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const deleteFromFavorites = async (postId) => {
//     try {
//       await axios.put("http://localhost:2000/api/posts/delete/favorites", {
//         userId,
//         postId,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return {
//     savedPosts,
//     savedPostsId,
//     addToFavorites,
//     deleteFromFavorites,
//     setSavedPosts,
//   };
// }
