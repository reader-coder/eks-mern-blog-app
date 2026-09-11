import { useEffect, useState } from 'react';
import { getPosts, createPost, deletePost } from './api.js';
import PostForm from './components/PostForm.jsx';
import PostList from './components/PostList.jsx';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light';
    } catch (e) {
      return 'light';
    }
  });

  const loadPosts = async () => {
    setLoading(true);
    const data = await getPosts();
    setPosts(Array.isArray(data) ? data : []);
    setLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {}
  }, [theme]);

  const handleCreate = async (post) => {
    await createPost(post);
    loadPosts();
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    loadPosts();
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-brand">
          <div className="header-logo" aria-hidden="true">✍️</div>
          <h1>Inkwell</h1>
        </div>
        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </header>

      <main>
        <PostForm onCreate={handleCreate} />
        {loading ? (
          <div className="loading-state">
            <div className="loading-spinner" />
            <p>Loading posts…</p>
          </div>
        ) : (
          <PostList posts={posts} onDelete={handleDelete} />
        )}
      </main>
    </div>
  );
}
