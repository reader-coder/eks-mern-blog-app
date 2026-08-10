import PostItem from './PostItem.jsx';

export default function PostList({ posts, onDelete }) {
  if (!posts.length) return <p>No posts yet. Create the first one!</p>;

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostItem key={post._id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
}
