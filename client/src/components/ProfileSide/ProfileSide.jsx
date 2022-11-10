import React from 'react';
import FollowersCard from '../FollowersCard/FollowersCard';
import LogoSearch from '../LogoSearch/LogoSearch';
import InfoCard from './InfoCard';
import './ProfileSide.css';

const ProfileSide = () => {

  return (
    <div className='ProfileSide'>
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  )
}

export default ProfileSide