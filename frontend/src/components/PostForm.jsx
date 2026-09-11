import { useState } from 'react';

export default function PostForm({ onCreate }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) return;
    await onCreate({ title, content, author });
    setTitle('');
    setContent('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} className="post-form" id="post-form">
      <div className="post-form-header">
        <div className="post-form-icon" aria-hidden="true">📝</div>
        <h2>New Post</h2>
      </div>

      <div className="form-group">
        <label htmlFor="post-title">Title</label>
        <input
          id="post-title"
          placeholder="What's on your mind?"
          aria-label="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="post-content">Content</label>
        <textarea
          id="post-content"
          placeholder="Share your thoughts…"
          aria-label="Post content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="post-author">Author</label>
        <input
          id="post-author"
          placeholder="Your name (optional)"
          aria-label="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <button type="submit" className="btn-publish" id="btn-publish">
        ✦ Publish Post
      </button>
    </form>
  );
}
