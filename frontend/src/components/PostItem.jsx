export default function PostItem({ post, onDelete }) {
  return (
    <div className="post-item">
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <small>
        By {post.author || 'Anonymous'} ·{' '}
        {new Date(post.createdAt).toLocaleString()}
      </small>
      <button onClick={() => onDelete(post._id)}>Delete</button>
    </div>
  );
}
