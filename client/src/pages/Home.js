import React from 'react';
import Navbar from '../component/Navbar/Navbar';
import './home.css';
import MainPost from './MainPost';

const Home = () => {
  return (
    <div className='home'>
      {/* Navbar */}
      <Navbar />
      <div>
        {/* LeftBar */}
        {/* MainPost */}
        <MainPost />
        {/* RightBar */}
      </div>
    </div>
  )
}

export default Home