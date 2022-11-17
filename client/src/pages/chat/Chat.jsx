import React, { useEffect, useRef, useState } from 'react'
import './Chat.css';
import LogoSarch from '../../components/LogoSearch/LogoSearch';
import ChatBox from '../../components/ChatBox/ChatBox';
import NavIcons from '../../components/NavChat/NavIcons';
import Conversation from '../../components/Conversation/Conversation';
import { useSelector } from 'react-redux';
import { userChats } from '../../api/ChatRequest';
import { io } from 'socket.io-client';

const Chat = () => {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  const socket = useRef();

  // connect to socket io for first time rendering
  useEffect(() => {
    socket.current = io('http://localhost:8800');
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  // Send Message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  // Get message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      // console.log(data)
      setReceivedMessage(data);
    });
  }, []);

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

  // check online status
  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };

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
                  online={checkOnlineStatus(chat)}
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
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />
      </div>
    </div>
  )
}

export default Chat;