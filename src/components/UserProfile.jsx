import React, { createContext, useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FETCH_URL } from "./config";
import ProfilePage from "./ProfilePage";

const UserContext = createContext();

const UserProfile = () => {
  const [person, setPerson] = useState([]);
  const { profileId } = useParams();

  useEffect(() => {
    callDetails();
  }, []);

  async function callDetails() {
    const response = await fetch(FETCH_URL);
    const data = await response.json();
    setPerson(data.users);
  }

  const filteredData = person.filter((persons) => persons.id === profileId * 1);

  return (
    <UserContext.Provider value={filteredData}>
      <ProfilePage />
    </UserContext.Provider>
  );
};

export default UserProfile;
