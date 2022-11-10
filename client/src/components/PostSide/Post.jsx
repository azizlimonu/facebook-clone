import React, { useState } from 'react';
import './Post.css';
import postImg from '../../img/postpic1.jpg';
import postImg2 from '../../img/postpic2.jpg';
import postImg3 from '../../img/postpic3.JPG';
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";

const Post = () => {
  const [like, setLike] = useState(false);

  const toggleLike = () => {
    setLike(!like);
  }
  return (
    <div className='Post'>
      <img src={postImg} alt='post' />

      <div className='postReact'>
        <img
          src={like ? Heart : NotLike}
          alt='like'
          onClick={toggleLike}
        />
        <img src={Comment} alt='comment' />
        <img src={Share} alt='share' />
      </div>

      <span style={{ color: "var(--gray)", fontSize: '12px' }}>
        20 Likes
      </span>

      <div className='detail'>
        <span>
          <b>Jihyo Twice</b>
        </span>
        <span>{" "}Professional dancer in kpop</span>
      </div>
    </div>
  )
}

export default Post