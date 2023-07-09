import React, {useState} from "react";
import ProfileComponent from "./ProfileComponent";
import { Link} from "react-router-dom";
import {data} from "./config";

const Profiles = () => {
    const profileData = data.users;

    const [selectedProfiles, setSelectedProfiles] = useState([]);

    const handleClick = (id) => {
      const selectedProfile = profileData.find((person) => person.id === id);
      setSelectedProfiles([...selectedProfiles, selectedProfile]);
      localStorage.setItem("selectedProfiles", JSON.stringify(selectedProfiles));
    }; 
    console.log("selectedProfile", selectedProfiles) ;
  return (   
    <div className="container">
      <div className="main-container">
        <div className="list-header">
          <h2>Select an account</h2>
        </div>
        <div className="listed-profiles">
          {profileData.map((person) => {
            const {id} = person
            return (
              <Link key={id} to= {`/profile/${id}` } onClick={()=> handleClick(id)}>
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
