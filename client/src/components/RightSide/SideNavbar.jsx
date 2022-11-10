import React from 'react';
import Home from '../../img/home.png';
import Notification from '../../img/noti.png';
import Comment from '../../img/comment.png';
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from 'react-router-dom';

const SideNavbar = () => {
  return (
    <div className='navIcons'>
      <Link to='../home'>
        <img src={Home} alt='home' />
      </Link>
      <UilSetting />
      <img src={Notification} alt='' />
      <Link to='..chat'>
        <img src={Comment} alt='' />
      </Link>
    </div>
  )
}

export default SideNavbar