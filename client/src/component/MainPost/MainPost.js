import React from 'react'
import ContentPost from '../ContentPost/ContentPost'
import Post from '../Post/Post';

const MainPost = () => {
  return (
    <div className='mainPostContainer'>
      <ContentPost />
      {/* mapping through the content and create Post Comp */}
      <Post />
    </div>
  )
}

export default MainPost