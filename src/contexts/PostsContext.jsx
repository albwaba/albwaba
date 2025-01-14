import { useAuth, useClerk } from "@clerk/clerk-react";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import { getPosts, getFilterPosts } from "../api/posts";
import { getNotSeenNotifications } from "../api/user";

const Posts = createContext(null);

export default function PostsProvider({ children }) {
  const { state } = useNavigation();
  const { getToken } = useAuth();
  const { user } = useClerk();

  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [notSeenNotifications, setNotSeenNotifications] = useState(0);
  const [querySearch, setQuerySearch] = useState("");
  const [filterPosts, setFiltersPosts] = useState([]);
  const [currentHomePage, setCurrentHomePgae] = useState("");
  const [currentSearchPage, setCurrentSearchPgae] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [totalHomePages, setTotalHomePages] = useState("");
  const [totalSearchPages, setTotalSearchPages] = useState("");
  const [totalHomePosts, setTotalHomePosts] = useState(0);
  const [totalSearchPosts, setTotalSearchPosts] = useState(0);
  const [sortHomeType, setSortHomeType] = useState("");
  const [sortSearchType, setSortSearchType] = useState("");
  const [filters, setFilters] = useState({
    furnished: [],
    facade: [],
    realEstateType: [],
  });
  // console.log(
  //   new URLSearchParams(filters).forEach((value, key) =>
  //     console.log(value + "--" + key)
  //   )
  // );

  const handeleChangeFilter = (e) => {
    const { name, value, checked } = e.target;
    setCurrentSearchPgae("");
    setFilters((prevFilters) => {
      const newValues = checked
        ? [...prevFilters[name], value]
        : prevFilters[name].filter((v) => v !== value);
      return { ...prevFilters, [name]: newValues };
    });

    // await handeleGetFilterPosts("", newFilters);
  };

  useEffect(() => {
    const handeleGetetPosts = async () => {
      // if (!isHomePage) return;
      try {
        setIsLoading(true);
        const posts = await getPosts(currentHomePage, sortHomeType);
        const notSeenCount = await getNotSeenNotifications(user.id);
        setNotSeenNotifications(notSeenCount);
        setPosts(posts.posts);
        setTotalHomePages(posts.totalPages);
        setTotalHomePosts(posts.totalPosts);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    handeleGetetPosts(currentHomePage);
  }, [currentHomePage, sortHomeType]);

  useEffect(() => {
    // if (!isHomePage) return;

    if (
      !Object.values(filters).some((filter) => filter.length > 0) &&
      !querySearch
    ) {
      navigate("/home");
      return;
    } else {
      navigate("/filter");
    }
    handeleGetFilterPosts(querySearch);
  }, [filters, currentSearchPage, sortSearchType]);

  async function handeleGetFilterPosts(searchText = "") {
    const filtersQuery = Object.values(filters).some(
      (filter) => filter.length > 0
    )
      ? new URLSearchParams(filters).toString()
      : "";
    const querySearch = searchText ? `q=${searchText}` : "";

    const page = !currentSearchPage
      ? ""
      : // : searchText && !filtersQuery
        // ? `page=${currentSearchPage}`
        `&page=${currentSearchPage}`;

    const qurey = `${querySearch}${
      searchText ? "&" + filtersQuery : filtersQuery
    }${page && page}${!sortSearchType ? "" : "&sort_type=" + sortSearchType}`;

    try {
      setIsLoading(true);
      const posts = await getFilterPosts(qurey);
      setFiltersPosts(posts.posts);
      setTotalSearchPages(posts.totalPages);
      setTotalSearchPosts(posts.totalPosts);
      setIsLoading(false);
      setQuerySearch(searchText);
      return posts;
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <Posts.Provider
      value={{
        posts,
        filters,
        totalSearchPosts,
        totalHomePosts,
        totalHomePages,
        totalSearchPages,
        currentHomePage,
        currentSearchPage,
        setCurrentHomePgae,
        setCurrentSearchPgae,
        filterPosts,
        setFilters,
        isLoading,
        handeleChangeFilter,
        handeleGetFilterPosts,
        setQuerySearch,
        querySearch,
        sortHomeType,
        sortSearchType,
        setSortHomeType,
        setSortSearchType,
        notSeenNotifications,
      }}
    >
      {children}
    </Posts.Provider>
  );
}

export const usePosts = () => {
  const contex = useContext(Posts);
  return contex;
};
