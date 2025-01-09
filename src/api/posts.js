import axios from "axios";

export const baseApi = axios.create({
  baseURL: "https://9awtomqr2c.loclx.io/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
const userId = localStorage.getItem("user-id");

export async function deleteFromFavorites(postId, token) {
  baseApi
    .patch(
      "posts/delete/favorites",
      { userId, postId }
      // {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${token}`,
      //     mode: "cors",
      //   },
      // },
    )
    .then((res) => res.data);
}

export async function addToFavorites(token, postId) {
  baseApi
    .patch(
      "posts/add/favorites",
      { userId, postId }
      // {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${token}`,
      //     mode: "cors",
      //   },
      // }
    )
    .then((res) => res.data);
}

export async function getSavedPosts() {
  return baseApi
    .get(
      `posts/${userId}/favorites`
      //   , {
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${token}`,
      //     mode: "cors",
      //   },
      // }
    )
    .then((res) => res.data);
}

export async function getPosts(page, sortType) {
  try {
    return baseApi
      .get(
        `posts${page ? "?page=" + page : ""}${
          !sortType
            ? ""
            : sortType && page
            ? "&sort_type=" + sortType
            : "?sort_type=" + sortType
        }`
        // {
        //   // headers: {
        //   //   "Content-Type": "application/json",
        //   //   Authorization: `Bearer ${token}`,
        //   //   mode: "cors",
        //   // },
        // }
      )
      .then((res) => res.data);
  } catch (error) {
    console.log(error);
  }
}

export async function getFilterPosts(query) {
  // console.log(query);
  // console.log(filtersQuery);
  // console.log(page);

  try {
    return baseApi.get(`posts/filters?${query.trim()}`).then((res) => res.data);
  } catch (error) {
    console.log(error);
  }
}
export async function getMyPosts(token) {
  try {
    // if (!token) throw new Error("no token try again");
    return baseApi

      .get(`myPosts/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          mode: "cors",
        },
      })
      .then((res) => res.data);
  } catch (error) {
    console.log(error);
  }
}
