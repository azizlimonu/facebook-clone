import React from 'react';
import './Profile.css';
import PostSide from '../../components/PostSide/PostSide';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import RightSide from '../../components/RightSide/RightSide';
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft';

const Profile = () => {

  return (
    <div className='Profile'>
      <ProfileLeft />
      <div className='Profile-center'>
        <ProfileCard location='profilePage' />
        <PostSide />
      </div>
      <RightSide />
    </div>
  )
}

export default Profile