import React from 'react';
import './profilemainpost.css';
import Coverimage from "../Images/Profile.png";
import ContentPost from '../ContentPost/ContentPost';
import ProfilePostContainer from '../ProfilePostContainer/ProfilePostContainer';

const ProfileMainPost = () => {
  return (
    <div className='ProfilemainPostContainer'>
      <div>
        <img src={Coverimage} alt='cover' className='profileCoverimage' />
        <h2 style={{ marginTop: -43, color: "white", textAlign: "start", marginLeft: "34px" }}>
          Your Profile
        </h2>
      </div>
      <ContentPost />
      <ProfilePostContainer />
      <ProfilePostContainer />
    </div>
  )
}

export default ProfileMainPost