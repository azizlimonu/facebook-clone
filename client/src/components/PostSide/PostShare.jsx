import React, { useRef, useState } from 'react';
import './PostShare.css';
import Post from './Post';
import profileImg from '../../img/img3.png';
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";

const PostShare = () => {
  const desc = useRef();
  const imageRef = useRef();
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // handle post image
  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setImage(img);
    }
  };

  // handle post upload
  const handleUpload = (e) => {
    e.preventDefault();
    console.log('upload submitted');
  
    // post Data
    // post Image
  }

  // Reset Post share
  const resetShare = () => {
    setImage(null);
  }

  return (
    <div className='PostShare'>
      <img src={profileImg} alt='profile' />
      <div>
        <input type='text' placeholder='Write your status...' required ref={desc} />

        <div className='postOptions'>
          <div
            className='option'
            style={{ color: 'var(--photo)' }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery /> Photo
          </div>

          <div className='option' style={{ color: 'var(--video)' }}>
            <UilPlayCircle /> Video
          </div>

          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint /> Location
          </div>

          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule /> Shedule
          </div>

          <button
            className="button ps-button"
            onClick={handleUpload}
            disabled={loading}
          >
            {loading ? "uploading" : "Share"}
          </button>

          <div style={{ display: "none" }}>
            <input type="file" ref={imageRef} onChange={onImageChange} />
          </div>

          {image && (
            <div className="previewImage">
              <UilTimes onClick={() => setImage(null)} />
              <img src={URL.createObjectURL(image)} alt="preview" />
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default PostShare