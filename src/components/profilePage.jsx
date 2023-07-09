import React from "react";
import Sidebar from "./Sidebar";
import { data } from "./config";
import { Outlet } from "react-router-dom";
import Chat from "./Chat";

const ProfilePage = () => {
  return (
    <div className="person-details">
      <Sidebar {...data}/>
      <div className="main-section">
        <Outlet />
        <Chat />
      </div>
    </div>
  );
};

export default ProfilePage;
