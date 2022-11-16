import React, { useState } from 'react'
import profileImg from '../../img/img3.png';
import { followUser, unfollowUser } from '../../app/actions/userActions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const User = ({ person }) => {
  const publicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();
  const [following, setFollowing] = useState(false);

  const handleFollow = () => {
    if (following) {
      dispatch(unfollowUser(person._id, user))
      setFollowing(false);
    } else {
      dispatch(followUser(person._id, user))
      setFollowing(true)
    }
    // console.log('Follow Triggered')
  }

  return (
    <div className='follower'>
      <div>
        <img src={
          person.profilePicture
            ? publicFolder + person.profilePicture
            : publicFolder + "defaultProfile.png"
        }
          alt='profile'
          className='followerImage'
        />

        <div className='name'>
          <span>{person.firstname}</span>
          <span>@{person.username}</span>
        </div>
      </div>

      <button
        className={
          following
            ? "button fc-button UnfollowButton"
            : "button fc-button"
        }
        onClick={handleFollow}
      >
        {following ? "Unfollow" : "Follow"}
      </button>
    </div>
  )
}

export default User