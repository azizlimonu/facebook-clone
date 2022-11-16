import React, { useEffect, useState } from 'react';
import './FollowersCard.css';
import FollowersModal from './FollowersModal';
import User from '../User/User';
import { useSelector } from 'react-redux';
import { getAllUser } from '../../api/UserRequest';

const FollowersCard = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [toggleModal, setToggleModal] = useState(false);
  const [person, setPerson] = useState([]);

  useEffect(() => {
    const fetchPersons = async () => {
      const { data } = await getAllUser();
      setPerson(data);
      console.log(data);
    };
    fetchPersons();
  }, []);

  return (
    <div className='FollowersCard'>
      <h3 className='titlefollowers'>People may you know</h3>

      {person?.map((person, idx) => {
        if (person._id !== user._id) {
          return <User person={person} key={idx} />
        }
      })}

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