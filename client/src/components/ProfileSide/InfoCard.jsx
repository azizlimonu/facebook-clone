import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "./ProfileModal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const InfoCard = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [toggleModal, setToggleModal] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id;
  const [profileUser, setProfileUser] = useState({});

  useEffect(() => {

  },[]);

  const handleModal = () => {
    setToggleModal(!toggleModal);
  }

  const handleLogOut = () => {
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