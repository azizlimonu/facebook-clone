import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getUser } from '../../api/UserRequest';

const Conversation = ({ data, currentUser }) => {
  const [userData, setUserData] = useState(null);
  const dispatch = useDispatch();

  // console.log("current user", currentUser);
  // console.log(data);
  // const userId = data?.members?.find((id) => id !== currentUser);
  // console.log("userId", userId)

  useEffect(() => {
    // id of user that we want to chat
    const getUserData = async () => {
      const userId = data.members.find((id) => id !== currentUser);
      try {
        const { data } = await getUser(userId);
        setUserData(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getUserData();
  }, []);

  const online = true;
  return (
    <>
      <div className='follower conversation'>
        <div>
          {online && (<div className='online-dot'></div>)}
          <img
            src={userData?.profilePicture ? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture : process.env.REACT_APP_PUBLIC_FOLDER + "defaultProfile.png"}
            alt="Profile"
            className="followerImage"
            style={{ width: "50px", height: "50px" }}
          />
          <div className="name" style={{ fontSize: '0.8rem' }}>
            <span>{userData?.firstname} {userData?.lastname}</span>
            <span style={{ color: online ? "#51e200" : "" }}>{online ? "Online" : "Offline"}</span>
          </div>
        </div>
      </div>
      <hr style={{ width: "90%", border: "0.1px solid #ececec" }} />
    </>
  )
}

export default Conversation