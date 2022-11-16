import React from 'react';
import FollowersCard from '../FollowersCard/FollowersCard';
import LogoSearch from '../LogoSearch/LogoSearch';
import './ProfileSide.css';
import ProfileCard from '../ProfileCard/ProfileCard';

const ProfileSide = () => {

  return (
    <div className='ProfileSide'>
      <LogoSearch />
      <ProfileCard location = 'homepage'/>
      <FollowersCard />
    </div>
  )
}

export default ProfileSide