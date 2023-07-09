import React, { useState } from 'react';
import ProfileComponent from './ProfileComponent';
import { data } from "./config";

const ChatBox = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [initialRender, setInitialRender] = useState(false);

  const ShowData = () => {
    const personData = data.users;
    return (
      <div className='chat-component'>
        {personData.map((person) => <ProfileComponent key={person.id} {...person} altClassName={"chat-profiles"}/>)}
      </div>
    );
  };

  const handleClick = () => {
    setShowProfile(!showProfile);
    setInitialRender(!showProfile)
  };

  const chatBoxClassName = `chat-box ${showProfile ? 'active' : ''} ${initialRender ? 'initial-render' : ''}`;

  return (
    <div className={chatBoxClassName}>
        <div className={`chat-icon ${showProfile ? 'active' : ''}`} onClick={handleClick}>
        <i className="fa-solid fa-message"></i>
        Chats
        {showProfile ? (
          <div className="up-icon">
            <i className="fa-solid fa-caret-up"></i>
          </div>
        ) : (
          <div className="drop-down-icon">
            <i className="fa-solid fa-caret-down"></i>
          </div>
        )}
      </div>
      <div className='chat-container'>{showProfile && <ShowData />}</div>
    </div>
  );
};

export default ChatBox;
