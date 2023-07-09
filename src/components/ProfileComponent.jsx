import React from "react";
import { Img_url } from "./config";

const ProfileComponent = (person) => {
  const { name, id, altClassName} = person;
  return (
    <div className= {`profile-container ${altClassName}`} >
      <img
        className="profile-image"
        src={`${Img_url}${id}.jpeg`}
        alt="profile"
      /> 
      <div className="profile name">{name}</div>
    </div>
  );
};

export default ProfileComponent;
