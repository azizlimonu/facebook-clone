import React from 'react';
import './profileleftbar.css';
import image from "../Images/Profile.png";
import image2 from "../Images/image2.jpg";

const ProfileLeftBar = () => {
  const handleFollow = () => {
    console.log('Follow triggered');
  }

  return (
    <div className='ProfileLeftbar'>
      <div className='NotificationsContainer'>
        <img src={image} className="ProfilepageCover" alt="pagecover" />

        <div style={{ display: 'flex', alignItems: 'center', marginTop: -30 }}>
          <img src={image} className="Profilepageimage" alt="profile" />
          <div>
            <p style={{ marginLeft: 6, marginTop: 20, color: "black", textAlign: 'start' }}>
              AzizLimonu
            </p>
            <p style={{ marginLeft: 6, marginTop: 20, color: "black", textAlign: "start", marginTop: -16, fontSize: 11 }}>
              Front-End Developer
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <p style={{ color: "black", marginLeft: 20, fontSize: "14px" }}>Followings</p>
          <p style={{ color: "black", marginRight: 20, fontSize: "12px", marginTop: 17 }}>
            50
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: -20 }}>
          <p style={{ color: "black", marginLeft: 20, fontSize: "14px" }}>Followers</p>
          <p style={{ color: "black", marginRight: 20, fontSize: "12px", marginTop: 17 }}>
            2K
          </p>
        </div>

        <div style={{ marginTop: -20 }}>
          <h5 style={{ color: "black", marginLeft: 10, fontSize: "14px", marginRight: 30, marginTop: 30, textAlign: "start" }}>User bio</h5>
          <p style={{ color: "black", fontSize: "12px", marginTop: -20, textAlign: "start", marginLeft: "10px" }}>
            What's Done it's Done
          </p>
        </div>

        {/* <div onClick={handleFollow}>
          <button style={{ width: "100%", paddingTop: 7, paddingBottom: 7, border: "none", backgroundColor: "green", color: "white" }}>
            10
          </button>
        </div> */}
        <div>
          <button style={{ width: "100%", paddingTop: 7, paddingBottom: 7, border: "none", backgroundColor: "green", color: "white" }}>
            Edit Bio
          </button>
        </div>

      </div>

      <div className='NotificationsContainer'>
        <h3 style={{marginLeft:'10px'}}>Followings</h3>
        <div style={{ display: "flex", justifyContent: 'space-between' }}>
          <p style={{ marginLeft: 10 }}>
            Friends
          </p>
          <p style={{ marginRight: 10, color: "#aaa" }}>
            See all
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: "wrap", marginLeft: 5 }}>
          <div style={{ marginLeft: 4, cursor: "pointer" }}>
            <img src={image2} className="friendimage" alt="" />
            <p style={{ marginTop: -2 }}>Fabriano</p>
          </div>
          <div style={{ marginLeft: 4, cursor: "pointer" }}>
            <img src={image2} className="friendimage" alt="" />
            <p style={{ marginTop: -2 }}>Fabriano</p>
          </div>
          <div style={{ marginLeft: 4, cursor: "pointer" }}>
            <img src={image2} className="friendimage" alt="" />
            <p style={{ marginTop: -2 }}>Fabriano</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileLeftBar