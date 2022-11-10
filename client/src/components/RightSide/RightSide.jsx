import React, { useState } from 'react';
import './RightSide.css';
import SideNavbar from './SideNavbar';
import TrendCard from './TrendCard';
import ShareModal from './ShareModal';

const RightSide = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const handleModal = () => {
    setToggleModal(!toggleModal);
  }

  return (
    <div className='RightSide'>
      <SideNavbar />
      <TrendCard />

      <button className="button r-button" onClick={() => setToggleModal(true)}>
        Share
      </button>
      <ShareModal toggleModal={toggleModal} setToggleModal={setToggleModal} />
    </div>
  )
}

export default RightSide