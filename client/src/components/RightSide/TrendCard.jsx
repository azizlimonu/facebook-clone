import React from 'react';
import './TrendCard.css';

const TrendCard = () => {
  return (
    <div className='TrendCard'>
      <h3>🔥 Trending Topic</h3>
      <div className='trend'>
        <span>#NewYonkou</span>
        <span>10k Shares</span>
      </div>
      <div className='trend'>
        <span>#AndrewTate</span>
        <span>2k Shares</span>
      </div>
      <div className='trend'>
        <span>#2024GantiPresident</span>
        <span>1k Shares</span>
      </div>
    </div>
  )
}

export default TrendCard