import React from 'react'
import ContentPost from '../component/ContentPost/ContentPost'
import Post from '../component/Post/Post'

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