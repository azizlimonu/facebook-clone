import React from 'react';
import { UilSearch } from '@iconscout/react-unicons';
import './LogoSearch.css';
import logoImg from '../../img/logo.png';

const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
      <img src={logoImg} alt='logo' />
      <div className='Search'>
        <input type='text' placeholder='Search...' />
        <div className='s-icon'>
          <UilSearch />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch