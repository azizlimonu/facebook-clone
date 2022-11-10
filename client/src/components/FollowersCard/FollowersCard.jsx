import React, { useState } from 'react';
import './FollowersCard.css';
import FollowersModal from './FollowersModal';
import User from '../User/User';

const FollowersCard = () => {
  const [toggleModal, setToggleModal] = useState(false);

  return (
    <div className='FollowersCard'>
      <h3 className='titlefollowers'>People may you know</h3>
      {/* Mapping through the person */}
      <User/>
      <span onClick={() => setToggleModal(true)}>
        Show More
      </span>

      <FollowersModal
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
      />

    </div>
  )
}

export default FollowersCard;