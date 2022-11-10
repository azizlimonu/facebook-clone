import React from 'react';
import './ProfileCard.css';
import profileImg from '../../img/profileImg.jpg';
import coverImg from '../../img/cover.jpg';
// import { Link } from 'react-router-dom';

const ProfileCard = () => {
  const profilePage = true;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={coverImg} alt="" />
        <img src={profileImg} alt="" />
      </div>

      <div className="ProfileName">
        <span>Jihyo Twice MJ</span>
        <span>Professional Dancer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>

          {profilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {profilePage ? "" : <span>My Profile</span>}
    </div>
  );
}

export default ProfileCard