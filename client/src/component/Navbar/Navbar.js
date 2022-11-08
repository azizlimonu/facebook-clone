import React from 'react'
import searchIcon from '../Images/search.png';
import notifIcon from '../Images/bell.png';
import messageIcon from '../Images/message.png';
import profileIcon from '../Images/Profile.png';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const handleLogout = () => {
    console.log('logout triggered');
  };

  return (
    <div className='mainNavbar'>
      <div className='LogoContainer'>
        <p>Facebook 2.0</p>
      </div>

      <div>
        <div className='searchInputContainer'>
          <img src={searchIcon} alt='search' className='searchIcon' />
          <input type='text' className='searchInput' placeholder='Search...' name='' id='' />
        </div>
      </div>

      <div className='IconsContainer'>
        <img src={notifIcon} className='Icons' alt='notif' />
        <img src={messageIcon} className='Icons' alt='message' />

        {/* <Link to={`/profile/${id}`}> */}
        <Link to='/profile'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={profileIcon} className='ProfileImage' alt='' />
          </div>
        </Link>

        {/* <div style={{ marginRight: '30px', marginLeft: '20px', cursor: 'pointer' }} onClick={handleLogout}>
          <p>Logout</p>
        </div> */}
      </div>
    </div>
  )
}

export default Navbar;