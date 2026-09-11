export default function PostItem({ post, onDelete }) {
  const authorName = post.author || 'Anonymous';
  const initials = authorName.charAt(0).toUpperCase();
  const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <article className="post-item" id={`post-${post._id}`}>
      <h3>{post.title}</h3>
      <p className="post-body">{post.content}</p>
      <div className="post-meta">
        <div className="post-author">
          <span className="author-avatar" aria-hidden="true">{initials}</span>
          <span>{authorName}</span>
        </div>
        <span className="post-date">{formattedDate}</span>
      </div>
      <button
        className="btn-delete"
        onClick={() => onDelete(post._id)}
        aria-label={`Delete post: ${post.title}`}
      >
        🗑 Delete
      </button>
    </article>
  );
}
