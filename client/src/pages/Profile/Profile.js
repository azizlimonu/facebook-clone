import React from 'react'
import './profile.css';
import ProfileLeftBar from '../../component/ProfileLeftBar/ProfileLeftBar'
import ProfileMainPost from '../../component/ProfileMainPost/ProfileMainPost'
import ProfileRightBar from '../../component/ProfileRightBar/ProfileRightBar'

const Profile = () => {

  return (
    <div className='ProfileContainer'>
      <div className='subProfileContainer'>
        <ProfileLeftBar />
        <ProfileMainPost />
        <ProfileRightBar />
      </div>
    </div>
  )
}

export default Profile