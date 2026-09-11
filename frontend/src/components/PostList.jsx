import PostItem from './PostItem.jsx';

export default function PostList({ posts, onDelete }) {
  if (!posts.length) {
    return (
      <div className="empty-state" id="empty-state">
        <div className="empty-icon" aria-hidden="true">📭</div>
        <h3>No posts yet</h3>
        <p>Create the first one using the form — your thoughts deserve to be shared!</p>
      </div>
    );
  }

  return (
    <div className="post-list" id="post-list">
      {posts.map((post) => (
        <PostItem key={post._id} post={post} onDelete={onDelete} />
      ))}
    </div>
  );
}
