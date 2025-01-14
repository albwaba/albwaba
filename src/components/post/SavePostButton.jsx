import { BsBookmarkHeart, BsBookmarkHeartFill } from "react-icons/bs";
import { usSavedePosts } from "../../contexts/FavoritesContext";

function SavePostButton({ post }) {
  const { savedPostsIds, handeleDeleteFromFavorites, handeleAddToFavorites } =
    usSavedePosts();

  return (
    <>
      {savedPostsIds.includes(post._id) ? (
        <button onClick={() => handeleDeleteFromFavorites(post._id)}>
          <BsBookmarkHeartFill className=" text-2xl" />
        </button>
      ) : (
        <button onClick={() => handeleAddToFavorites(post)}>
          <BsBookmarkHeart className=" text-2xl" />
        </button>
      )}
    </>
  );
}

export default SavePostButton;
