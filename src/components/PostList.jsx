import PostItem from "./PostItem";

export default function PostList({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
      {posts?.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
}
