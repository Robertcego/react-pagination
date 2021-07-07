import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import Posts from './components/Posts.jsx';
import Pagination from './components/Pagination.jsx';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setPosts(response.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const postsToDisplay = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change current page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // ------------------------------------- \\
  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>jsonplaceholder API</h1>
      <Posts posts={postsToDisplay} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
