import React, { useState, useRef } from "react";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import profileImg from '../../img/postpic2.jpg';

const PostShare = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const desc = useRef();
  const imageRef = useRef();
  const [loading, setLoading] = useState(false);

  // handle Image Change
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };

  // handle post upload
  const handleUpload = async (e) => {
    e.preventDefault();
    console.log('SUbmit triggered');
    //post data

    // if there is an image with post

  };

  // Reset Post Share
  const resetShare = () => {
    setImage(null);
  };

  return (
    <div className="PostShare">
      <img
        src={profileImg}
        alt="Profile"
      />
      <div>
        <input
          type="text"
          placeholder="What's happening?"
          required
          ref={desc}
        />
        <div className="postOptions">
          <div
            className="option"
            style={{ color: "var(--photo)" }}
            onClick={() => imageRef.current.click()}
          >
            <UilScenery />
            Photo
          </div>

          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>

          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>

          <div className="option" style={{ color: "var(--shedule)" }}>
            <UilSchedule />
            Shedule
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
          
        </div>

        {image && (
          <div className="previewImage">
            <UilTimes onClick={() => setImage(null)} />
            <img src={URL.createObjectURL(image)} alt="preview" />
          </div>
        )}
        
      </div>
    </div>
  );
};

export default PostShare;
