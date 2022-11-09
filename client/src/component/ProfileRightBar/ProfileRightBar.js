import React from 'react';
import './profilerightbar.css';
import image from '../Images/image2.jpg';
import image2 from '../Images/image3.jpg';
import Follow from '../Rightbar/Follow';

const ProfileRightBar = () => {
  return (
    <div className='Profilerightbar'>
      <div className='profilerightcontainer'>
        <h3 style={{ marginLeft: '10px' }}>Followers</h3>
        <div>

          <div style={{ marginTop: "10px" }}>
            <div style={{ display: 'flex', alignItems: "center", marginLeft: 10, cursor: "pointer",marginTop:'10px' }}>
              <img src={image} className="Friendsimage" alt="" />
              <p style={{ textAlign: "start", marginLeft: "10px" }}>
                Abu Nawas
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: "center", marginLeft: 10, marginTop:'10px', cursor: "pointer" }}>
              <img src={image2} className="Friendsimage" alt="" />
              <p style={{ textAlign: "start", marginLeft: "10px" }}>
                Sunyeon Kim
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='rightcontainer2'>
        <h3 style={{ textAlign: "start", marginLeft: "10px" }}>
          Suggested for you
        </h3>
        <Follow />
      </div>

    </div>
  )
}

export default ProfileRightBar