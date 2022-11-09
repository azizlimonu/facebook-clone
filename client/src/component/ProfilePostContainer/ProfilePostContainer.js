import React, { useState } from 'react'
import './profilepostcontainer.css';
import ProfileImage from "../Images/Profile.png"
import LikeIcon from "../Images/like.png";
import CommentIcon from "../Images/speech-bubble.png";
import Shareicon from "../Images/share.png";
import Moreoption from "../Images/more.png";
import anotherlikeicon from "../Images/setLike.png"

const ProfilePostContainer = () => {
  const [count, setCount] = useState(0);
  const [Comments, setComments] = useState([]);
  const [commentwriting, setcommentwriting] = useState('');
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(false)

  const handleLike = () => {
    setLike(!like)
  }

  const addComment = () => {
    const comment = {
      "id": "123456789",
      "username": "azizlimonu",
      "title": { commentwriting }
    }
    setComments(Comments.concat(comment));
  }

  const handleComment = () => {
    addComment();
  }

  console.log(Comments)

  const handleshow = () => {
    setShow(!show)
  }

  return (
    <div className='PostContainer'>
      <div className='SubPostContainer'>
        <div>
          <div style={{ display: 'flex', alignItems: "center" }}>
            <img src={ProfileImage} className="PostImage" alt="" />

            <div>
              <p style={{ marginLeft: '5px', textAlign: "start" }}>
                Kamarudin
              </p>
              <p style={{ fontSize: "11px", textAlign: "start", marginLeft: 5, marginTop: -13, color: "#aaa" }}>
                Following by simon
              </p>
            </div>

            <img src={Moreoption} className="moreicons" alt="" />
          </div>

          <p style={{ textAlign: 'start', width: "96%", marginLeft: 20, marginTop: 0 }}>
            This is the title
          </p>

          <img src={ProfileImage} className="PostImages" alt="" />
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", marginLeft: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                <img
                  src={like ? LikeIcon : anotherlikeicon}
                  className="iconsforPost"
                  onClick={handleLike}
                  alt=""
                />
                <p style={{ marginLeft: "6px" }}>
                  20 Likes
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", marginLeft: 20, cursor: "pointer" }}>
                <img
                  src={CommentIcon}
                  className="iconsforPost"
                  onClick={handleshow}
                  alt=""
                />
                <p style={{ marginLeft: "6px" }}>
                  2 Comments
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", marginLeft: 200, cursor: "pointer" }}>
              <img
                src={Shareicon}
                className="iconsforPost"
                alt=""
              />
              <p style={{ marginLeft: "6px" }}>
                Share
              </p>
            </div>

          </div>
          {show === true ?
            <div style={{ padding: '10px' }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={ProfileImage}
                  className="PostImage"
                  alt=""
                />
                <p style={{ marginLeft: "6px" }}>
                  AzizLimonu
                </p>
                <input
                  type="text"
                  className='commentinput'
                  placeholder='Write your thought' o
                  nChange={(e) => setcommentwriting(e.target.value)}
                />
                <button
                  className='addCommentbtn'
                  onClick={handleComment}
                >
                  Post
                </button>
              </div>

              {Comments.map((item) => (
                <div style={{ alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <img
                      src={ProfileImage}
                      className="PostImage"
                      alt=""
                    />
                    <p style={{ marginLeft: "6px", fontSize: 18, marginTop: 6 }}
                    >
                      azizlimonu
                    </p>
                  </div>
                  <p style={{ marginLeft: "55px", textAlign: 'start', marginTop: -16 }}
                  >
                    This is title
                  </p>
                  <p style={{ marginLeft: "55px", textAlign: 'start', marginTop: -10, color: "#aaa", fontSize: 11 }}
                  >
                    Reply
                  </p>

                </div>

              ))}
            </div> : ''
          }
        </div>
      </div>
    </div>
  )
}

export default ProfilePostContainer;