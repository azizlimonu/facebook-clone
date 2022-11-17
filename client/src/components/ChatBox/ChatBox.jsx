import React, { useEffect, useRef, useState } from 'react'
import './ChatBox.css';
import InputEmoji from 'react-input-emoji';
import { getUser } from '../../api/UserRequest';
import { getMessages } from '../../api/MessageRequest';
import { format } from 'timeago.js';


const ChatBox = ({ chat, currentUser }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");


  // fetch data user
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    }
    if (chat !== null) getUserData();
  }, [chat, currentUser])

  // fetch message
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await getMessages(chat._id);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) fetchMessages();
  }, [chat]);

  // Ref
  const scroll = useRef();
  const imageRef = useRef();

  // handle 
  const handleChange = (emoji) => {
    setNewMessage(emoji);
  }

  const handleSend = (e) => {
    e.preventDefault()
    const message = {
      senderId: currentUser,
      text: newMessage,
      chatId: chat._id
    }
    const receiverId = chat.members.find((id)=>id!==currentUser);
  }

  return (
    <>
      <div className="ChatBox-container">
        {chat ? (
          <>
            {/* chat-header */}
            <div className="chat-header">
              <div className="follower">
                <div>
                  <img
                    src={
                      userData?.profilePicture
                        ? process.env.REACT_APP_PUBLIC_FOLDER +
                        userData.profilePicture
                        : process.env.REACT_APP_PUBLIC_FOLDER +
                        "defaultProfile.png"}
                    alt="Profile"
                    className="followerImage img-chatbox"
                    style={{ width: "50px", height: "50px" }}
                  />

                  <div className="name" style={{ fontSize: "0.9rem" }}>
                    <span>
                      {userData?.firstname} {userData?.lastname}
                    </span>
                  </div>

                </div>

              </div>

              <hr
                style={{
                  width: "95%",
                  border: "0.1px solid #ececec",
                  marginTop: "20px",
                }}
              />

            </div>

            {/* chat-body */}
            <div className="chat-body" >
              {/* mapping through the chat */}
              {messages.map((message) => (
                <>
                  <div
                    // ref={scroll}
                    className={
                      message.senderId === currentUser
                        ? "message own"
                        : "message"
                    }
                  >
                    <span>{message.text}</span>{" "}
                    <span>{format(message.createdAt)}</span>
                  </div>
                </>
              ))}
            </div>

            {/* chat-sender */}
            <div className="chat-sender">
              <div>+</div>
              <InputEmoji
                value={newMessage}
                onChange={handleChange}
              />

              <button
                className="send-button button"
                onClick={handleSend}
              >
                Send
              </button>
              <input
                type="file"
                name=""
                id=""
                style={{ display: "none" }}
              // ref={imageRef}
              />
            </div>{" "}
          </>
        ) : (
          <span className="chatbox-empty-message">
            Tap on a chat to start conversation...
          </span>
        )}
      </div>
    </>
  )
}

export default ChatBox;