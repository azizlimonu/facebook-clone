import React from 'react';
import './leftbar.css';
import imageIcon from '../Images/Profile.png';
import image from "../Images/Profile.png";
import image1 from "../Images/image1.jpg";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";
import image4 from "../Images/image4.jpg"
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg"

const Leftbar = () => {
  return (
    <div className='Leftbar'>
      <div className='NotificationsContainer'>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p style={{ marginLeft: '-14px' }}>Notification</p>
          <p style={{ color: '#aaa', marginLeft: '40px' }}>See All</p>
        </div>


        <div className='notif Notif__following'>
          <img src={image1} alt='notiffollow' style={{ width: '35px', height: '35px', borderRadius: '50%', margin: '5px 0px 0px 15px' }} />
          <p style={{ marginLeft: "5px", color: "#aaa", fontSize: 13, width: "190px", textAlign: "start" }}>Kim started to following you</p>
        </div>

        <div className='notif Notif__following'>
          <img src={image2} alt='notiffollow' style={{ width: '35px', height: '35px', borderRadius: '50%', margin: '5px 0px 0px 15px' }} />
          <p style={{ marginLeft: "5px", color: "#aaa", fontSize: 13, width: "190px", textAlign: "start" }}>Jung started to following you</p>
        </div>

        <div className='notif Notif__following'>
          <img src={image3} alt='notiffollow' style={{ width: '35px', height: '35px', borderRadius: '50%', margin: '5px 0px 0px 15px' }} />
          <p style={{ marginLeft: "5px", color: "#aaa", fontSize: 13, width: "190px", textAlign: "start" }}>Abunawas started to following you</p>
        </div>

        <div className='notif Notif__like'>
          <img src={image4} alt='notiflike' style={{ width: '35px', height: '35px', borderRadius: '50%', margin: '5px 0px 0px 15px' }} />
          <p style={{ marginLeft: "5px", color: "#aaa", fontSize: 13, width: "120px", textAlign: "start" }}>Jihyo like your post</p>
          <img src={image1} alt='image' style={{ height: '30px', width: '30px', borderRadius: '3px', marginLeft: '45px' }} />
        </div>


        <div className='notif Notif__like'>
          <img src={image5} alt='notiflike' style={{ width: '35px', height: '35px', borderRadius: '50%', margin: '5px 0px 0px 15px' }} />
          <p style={{ marginLeft: "5px", color: "#aaa", fontSize: 13, width: "120px", textAlign: "start" }}>Jihyo like your post</p>
          <img src={image1} alt='image' style={{ height: '30px', width: '30px', borderRadius: '3px', marginLeft: '45px' }} />
        </div>


        <div className='notif Notif__like'>
          <img src={image6} alt='notiflike' style={{ width: '35px', height: '35px', borderRadius: '50%', margin: '5px 0px 0px 15px' }} />
          <p style={{ marginLeft: "5px", color: "#aaa", fontSize: 13, width: "120px", textAlign: "start" }}>Jihyo like your post</p>
          <img src={image1} alt='image' style={{ height: '30px', width: '30px', borderRadius: '3px', marginLeft: '45px' }} />
        </div>

      </div>

      <div className='NotificationsContainer'>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <p style={{ marginLeft: '-20px' }}>Explore</p>
          <p style={{ color: "#aaa", marginLeft: "40px" }}>See all</p>
        </div>

        <div className='explore'>
          <img src={image5} alt='explorer' />
          <img src={image1} alt='explorer' />
          <img src={image2} alt='explorer' />
          <img src={image3} alt='explorer' />
          <img src={image4} alt='explorer' />
          <img src={image5} alt='explorer' />
          <img src={image6} alt='explorer' />
          <img src={image2} alt='explorer' />
          <img src={image3} alt='explorer' />
          <img src={image4} alt='explorer' />
          <img src={image5} alt='explorer' />
          <img src={image6} alt='explorer' />
        </div>

        {/* <div>
          {post.map((item) => (
            [item.image === '' ? '' :
              <img src={`${item.image}`} className="exploreimage" alt="" />
            ]

          ))} */}
      </div>
    </div>
  )
}

export default Leftbar