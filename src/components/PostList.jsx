import React, { memo, useCallback } from "react";

import PostItem from "./PostItem";

// const PostList = memo(
//   (props) => {

export default function PostList({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
      {posts?.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
}

// return (
//   <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
//     {props.posts.map((post) => (
//       <PostItem key={post._id} post={post} />
//     ))}
//   </div>
// );
// },
// (prevProps, nextProps) => {
//   return JSON.stringify(prevProps.data) === JSON.stringify(nextProps.data);
// }
// );

// export default PostList;
