import React from "react";
import ProfileComponent from "./ProfileComponent";
import { Link} from "react-router-dom";
import {data} from "./config";

const Profiles = () => {
    const profileData = data.users;

  return (   
    <div className="landingpage container">
      <div className="main-container">
        <div className="list-header">
          <h2>Select an account</h2>
        </div>
        <div className="listed-profiles">
          {profileData.map((person) => {
            const {id} = person
            return (
              <Link key={id} to= {`/profile/${id}` }>
                <ProfileComponent  {...person} altClassName={"altClassName"}/>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profiles;
