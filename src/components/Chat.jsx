import React, { useState } from "react";
import ProfileComponent from "./ProfileComponent";
import { data } from "./config";

const ChatBox = () => {
  const [showChat, setShowChat] = useState(false);

  const ShowData = () => {
    const personData = data.users;
    return (
      <div className="chat-component">
        {personData.map((person) => (
          <ProfileComponent
            key={person.id}
            {...person}
            altClassName={"chat-profiles"}
          />
        ))}
      </div>
    );
  };

  return (
      <aside className="chat-container">
        <div  className="chat-list index">
          <header className="chat-header" onClick={()=> showChat ? setShowChat(false) : setShowChat(true)}>
            <div className="chat-header icon">
              <div className="message-icon"><i className="fa-solid fa-message"></i></div>
              <button className = "chat-button" type="button">
                <span>Chats</span>
              </button>
            </div>
            <div className="chat-header controls">
              <button className="chat-header controls up "><i className="fa-solid fa-caret-up up-button"></i></button>
              {/* <button><i className="fa-solid fa-caret-down down-button"></i></button> */}
            </div>
          </header>
          <section className= "scrollable chat">
            <div className="conversations">
              <div className="chat-list">{showChat &&  <ShowData />}</div>
            </div>
          </section>
        </div>
      </aside>
  );
};

export default ChatBox;
