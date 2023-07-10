import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProfileComponent from "./ProfileComponent";
import Logout from "./LogoutComponent";

const Header = (details) => {
  const location = useLocation();
  const [showStatus, setShowStatus] = useState(false);

  let pageTitle = "Profile";

  if (location.pathname.includes("/post")) {
    pageTitle = "Post";
  } else if (location.pathname.includes("/gallery")) {
    pageTitle = "Gallery";
  } else if (location.pathname.includes("/todo")) {
    pageTitle = "Todo";
  }

  const toggleLogout = () => {
    setShowStatus(!showStatus);
  };
  return (
    <div className="head-container">
      <header className="header">
        <h1 className="page">{pageTitle}</h1>
        <div className="logged-profile" onClick={toggleLogout}>
          <ProfileComponent {...details} altClassName={"login-profile"} />
        </div>
      </header>
      <> 
      {showStatus && <Logout {...details}/>}
      </>
    </div>
  );
};

export default Header;
