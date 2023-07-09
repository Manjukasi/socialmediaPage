import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ProfileComponent from "./ProfileComponent";
import Logout from "./LogoutComponent";

const Header = (data) => {
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
    <div className="header-container">
      <header className="header">
        <h1 className="profilePage">{pageTitle}</h1>
        <div className="logged-profile" onClick={toggleLogout}>
          <ProfileComponent {...data} altClassName={"login-profile"} />
        </div>
      </header>
      <> 
      {showStatus && <Logout {...data}/>}
      </>
    </div>
  );
};

export default Header;
