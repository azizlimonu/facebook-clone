import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
import ProfileModal from "./ProfileModal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from '../../api/UserRequest';
import { logout } from '../../app/actions/AuthActions';

const InfoCard = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [toggleModal, setToggleModal] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  const profileUserId = params.id;
  // console.log(profileUserId);
  const [profileUser, setProfileUser] = useState({});

  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
      } else {
        console.log("fetching")
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
      }
    };
    fetchProfileUser();
    // console.log(profileUser);
  }, [user]);

  const handleModal = () => {
    setToggleModal(!toggleModal);
  }

  const handleLogOut = () => {
    console.log('Logout Triggered');
    dispatch(logout());
  };

  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Profile Info</h4>
        {user._id === profileUserId && (
          <div>
            <UilPen
              width="2rem"
              height="1.2rem"
              onClick={() => setToggleModal(true)}
            />
            <ProfileModal
              toggleModal={toggleModal}
              setToggleModal={setToggleModal}
              data={user}
            />
          </div>
        )}
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>{profileUser.relationship}</span>
      </div>
      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>{profileUser.livesIn}</span>
      </div>
      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>{profileUser.worksAt}</span>
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