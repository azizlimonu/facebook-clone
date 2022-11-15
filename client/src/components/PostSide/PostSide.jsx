import React from 'react';
import PostShare from '../PostShare/PostShare';
import Post from './Post';
import './PostSide.css';

const PostSide = () => {
  return (
    <div className='PostSide'>
      <PostShare />
      <Post />
    </div>
  )
}

export default PostSide