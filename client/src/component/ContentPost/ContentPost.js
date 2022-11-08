import React, { useState } from 'react';
import './contentpost.css';
import imageIcon from '../Images/gallery.png';
import emojiIcon from '../Images/cat-face.png';
import videoIcon from '../Images/video.png';
import profileIcon from '../Images/Profile.png';

const ContentPost = () => {
  const [tile, setTile] = useState('');
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [imagePre, setImagePre] = useState(null);
  const [videoPre, setVideoPre] = useState(null);

  const handlePost = (e) => {
    e.preventDefault();
    console.log('submitted triggered')
  }

  const handleUploadImg = (e) => {
    setFile(e.target.files[0]);
    setImagePre(URL.createObjectURL(e.target.files[0]));
  }

  const handleUploadVideo = (e) => {
    setFile2(e.target.files[0]);
    setVideoPre(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <>
      <div className='ContentUploadContainer'>
        <div className='contentUploadText'>
          <img src={profileIcon} alt='profile' />
          <input type='text' className='contentWritingpart' placeholder='Write your status...' onChange={(e) => setTile(e.target.value)} />
        </div>

        <div className='buttonContainer'>
          <div className='btnWrap'>
            <div>
              <label htmlFor='file'>
                <img src={`${imageIcon}`} className="btnIcons" alt="" />
                <input
                  type="file"
                  name="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={handleUploadImg} />
              </label>

              <img src={`${emojiIcon}`} className="btnIcons" alt="" />

              <label htmlFor='file2'>
                <img src={`${videoIcon}`} className="btnIcons" alt="" />
                <input
                  type="file"
                  name="file2"
                  id="file2"
                  style={{ display: "none" }}
                  onChange={handleUploadVideo} />
              </label>
            </div>

            <button onClick={handlePost} style={{ height: "30px", marginRight: "12px", marginTop: "40px", paddingLeft: "20px", paddingRight: "20px", paddingTop: 6, paddingBottom: 6, border: "none", backgroundColor: "black", color: "white", borderRadius: "5px", cursor: "pointer" }}>
              Post
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default ContentPost