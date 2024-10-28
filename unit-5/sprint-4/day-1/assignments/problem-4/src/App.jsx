import React, { useState, useEffect, useCallback, useMemo } from 'react';

const Post = React.memo(({ post, toggleVerify }) => {
  const { id, title, body, verified } = post;

  const randomBackground = useMemo(() => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  }, []);

  return (
    <div style={{ backgroundColor: randomBackground, padding: '10px', marginBottom: '10px' }}>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => toggleVerify(id)}>
        {verified ? 'Verified' : 'Verify'}
      </button>
    </div>
  );
});

const App = () => {
  const [timer, setTimer] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const addPost = useCallback(() => {
    if (title && body) {
      const newPost = {
        id: Date.now(),
        title,
        body,
        verified: false,
      };
      setPosts((prevPosts) => [...prevPosts, newPost]);
      setTitle('');
      setBody(''); 
    }
  }, [title, body]);

  const toggleVerify = useCallback((postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, verified: !post.verified } : post
      )
    );
  }, []);

  const memoizedPosts = useMemo(() => {
    return posts.map((post) => (
      <Post key={post.id} post={post} toggleVerify={toggleVerify} />
    ));
  }, [posts, toggleVerify]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Timer: {timer}</h1>
      <input
        type="text"
        placeholder="Enter post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter post body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={addPost}>Add Post</button>
      <h2>Posts</h2>
      {memoizedPosts}
    </div>
  );
};

export default App;
