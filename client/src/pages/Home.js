import React from 'react';
import './home.css';
import MainPost from './MainPost';
import Navbar from '../component/Navbar/Navbar';
import Leftbar from '../component/Leftbar/Leftbar';
import Rightbar from '../component/Rightbar/Rightbar';

const Home = () => {
  return (
    <div className='home'>
      {/* Navbar */}
      <Navbar />
      <div className='ComponentContainer'>
        <Leftbar />
        <MainPost />
        <Rightbar />
      </div>
    </div>
  )
}

export default Home