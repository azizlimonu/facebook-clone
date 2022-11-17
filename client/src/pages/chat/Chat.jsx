import React, { useEffect, useState } from 'react'
import './Chat.css';
import LogoSarch from '../../components/LogoSearch/LogoSearch';
import ChatBox from '../../components/ChatBox/ChatBox';
import NavIcons from '../../components/NavChat/NavIcons';
import Conversation from '../../components/Conversation/Conversation';
import { useSelector } from 'react-redux';
import { userChats, createChat, findChat } from '../../api/ChatRequest';


const Chat = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  // fetch chat
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getChats();
  }, [user._id])

  return (
    <div className='Chat'>
      {/* Left Section */}
      <div className='Left-side-chat'>
        <LogoSarch />

        <div className='Chat-container'>
          <h2>Chat Messenger</h2>
          <div className='Chat-list'>
            {chats?.map((chat, idx) => (
              <div
                onClick={() => {
                  setCurrentChat(chat);
                }}
                key={idx}
              >
                <Conversation
                  data={chat}
                  currentUser={user._id}
                />
              </div>
            ))}
            {/* Conversation */}
          </div>
        </div>

      </div>

      {/* Right Section for the chat */}
      <div className='Right-side-chat'>
        <div className='navicons'>
          <NavIcons />
          {/* Nav component */}
        </div>
        <ChatBox 
          chat={currentChat}
          currentUser={user._id}
        />
        {/* chat box component */}
      </div>
    </div>
  )
}

export default Chat;