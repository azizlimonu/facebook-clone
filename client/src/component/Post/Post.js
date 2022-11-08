import React, { useState } from 'react'
import "./post.css";
import ProfileImage from "../Images/Profile.png"
import LikeIcon from "../Images/like.png";
import CommentIcon from "../Images/speech-bubble.png";
import Shareicon from "../Images/share.png";
import Moreoption from "../Images/more.png";
import anotherlikeicon from "../Images/setLike.png"

const Post = () => {
  const [user, setuser] = useState([]);
  const [show, setshow] = useState(false);
  const [commentwriting, setcommentwriting] = useState('');


  const handleLike = () => {
    console.log('like triggered');
  }

  const addComment = () => {
    console.log('comment trigred');
  }

  const handleComment = () => {
    addComment();
  }


  const handleshow = () => {
    setshow(!show);
  }


  return (
    <>
      <div className='PostContainer'>
        <div>
          <div style={{ display: 'flex', alignItems: "center" }}>
            <img src={ProfileImage} className="PostImage" alt="" />

            <div>
              <p style={{ marginLeft: '5px', textAlign: "start" }}>Aliando</p>
              <p style={{ fontSize: "11px", textAlign: "start", marginLeft: 5, marginTop: -13, color: "#aaa" }}>Following by jihyo</p>
            </div>

            <img src={Moreoption} className="moreicons" alt="" />
          </div>

          <p style={{ textAlign: 'start', width: "96%", marginLeft: 20, marginTop: 0 }}>Beautifull Day!!!</p>
          <img src={ProfileImage} className='PostImages' alt='' />

          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", marginLeft: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                <img src={LikeIcon} className="iconsforPost" onClick={handleLike} alt="" />
                <p style={{ marginLeft: "6px" }}>69 Likes</p>
              </div>

              <div style={{ display: "flex", alignItems: "center", marginLeft: 20, cursor: "pointer" }}>
                <img src={CommentIcon} className="iconsforPost" onClick={handleshow} alt="" />
                <p style={{ marginLeft: "6px" }}>2 Comments</p>
              </div>

            </div>

            <div style={{ display: "flex", alignItems: "center", marginLeft: 200, cursor: "pointer" }}>
              <img src={Shareicon} className="iconsforPost" alt="" />
              <p style={{ marginLeft: "6px" }}>Share</p>
            </div>

          </div>

          {show === true ?
            <div style={{ padding: '10px' }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img src={ProfileImage} className="PostImage" alt="" />
                <input
                  type="text"
                  className='commentinput'
                  placeholder='Write your thought'
                  onChange={(e) => setcommentwriting(e.target.value)}
                />
                <button className='addCommentbtn' onClick={handleComment}>Post</button>
              </div>
              {/* if theres any comment we will added soon after db */}
            </div> : ''
          }
        </div>
      </div>
    </>
  )
}

export default Post;