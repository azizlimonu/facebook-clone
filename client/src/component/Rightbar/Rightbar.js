import React from 'react';
import './rightbar.css';
import ads from "../Images/ads.jpg";
import image1 from "../Images/image3.jpg";
import addFriends from "../Images/add-user.png";
import Follow from './Follow';

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className='rightcontainer'>
        <div className='adsContainer'>
          <img src={ads} alt='adsimage' />
          <div>
            <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>CodeDemy</p>
            <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Buy codedemy course</p>
          </div>
        </div>
        <div className='adsContainer'>
          <img src={image1} alt='adsimage' />
          <div>
            <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>CodeDemy</p>
            <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>
              Buy codedemy course
            </p>
          </div>
        </div>
      </div>

      <div className='rightcontainer2'>
        <h3 style={{ textAlign: "start", marginLeft: "10px" }}>Suggested for you</h3>
        {/* {users.map((item)=>(
          <Follow userdetails={item}/>
          ))} */}
        <Follow />
      </div>
    </div>
  )
}

export default Rightbar