import React, { useState } from 'react'
import profileImg from '../../img/img3.png';

const User = () => {
  const [following, setFollowing] = useState(false)
  const handleFollow = () => {
    setFollowing(!following);
    console.log('Follow Triggered soon added function')
  }

  return (
    <>
      <div className='follower'>
        <div>
          <img src={profileImg} alt='profile' className='followerImage' />

          <div className='name'>
            <span>Dr Vega Punk</span>
            <span>@vegapunk404</span>
          </div>
        </div>

        <button className={following ? "button fc-button UnfollowButton" : "button fc-button"} onClick={handleFollow}>
          {following ? "Unfollow" : "Follow"}
        </button>
      </div>
      {/* ================================================== */}
      <div className='follower'>
        <div>
          <img src={profileImg} alt='profile' className='followerImage' />

          <div className='name'>
            <span>Dr Vega Punk</span>
            <span>@vegapunk404</span>
          </div>
        </div>

        <button className={following ? "button fc-button UnfollowButton" : "button fc-button"} onClick={handleFollow}>
          {following ? "Unfollow" : "Follow"}
        </button>
      </div>
    </>
  )
}

export default User