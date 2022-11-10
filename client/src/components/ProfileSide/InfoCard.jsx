import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "./ProfileModal";
// import { useParams } from "react-router-dom";

const InfoCard = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const handleModal = () => {
    setToggleModal(!toggleModal);
  }

  const handleLogOut=()=>{
    console.log('Logout Triggered');
  }

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Profile Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="1.2rem"
            onClick={() => setToggleModal(true)}
          />
          <ProfileModal
            toggleModal={toggleModal}
            setToggleModal={setToggleModal}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>Single</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>South Korean</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Ny Company</span>
      </div>

      <button
        className="button logout-button"
        onClick={handleLogOut}
      >
        Log Out
      </button>
    </div>
  )
}

export default InfoCard;