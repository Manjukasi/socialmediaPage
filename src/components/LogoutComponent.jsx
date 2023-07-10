import React from "react";
import { Link } from "react-router-dom";
import { Img_url } from "./config";

const Logout = (data) => {
  return (
    <div className="logout-tab">
      <div>
        <img src={`${Img_url}${data.id}.jpeg`} alt="Profile" />
        <h2>{data.name}</h2>
        <h3>{data.email}</h3>
      </div>
      <Link to="/">
        <button className="logout-button">Logout</button>
      </Link>
    </div>
  );
};

export default Logout;
