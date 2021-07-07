import React from 'react';

function Posts({ posts, loading }) {
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <ul className='list-group mb-4'>
        {posts.map((post) => (
          <li key={post.id} className='list-group-item'>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
