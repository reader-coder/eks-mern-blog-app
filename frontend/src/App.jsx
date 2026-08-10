import { useEffect, useState } from 'react';
import { getPosts, createPost, deletePost } from './api.js';
import PostForm from './components/PostForm.jsx';
import PostList from './components/PostList.jsx';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadPosts = async () => {
    setLoading(true);
    const data = await getPosts();
    setPosts(Array.isArray(data) ? data : []);
    setLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);

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
      <h1>Simple Blog</h1>
      <PostForm onCreate={handleCreate} />
      {loading ? <p>Loading...</p> : <PostList posts={posts} onDelete={handleDelete} />}
    </div>
  );
}
