import React, { useState, useEffect, createContext } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useParams } from "react-router-dom";
import { FETCH_URL } from "./config";
import Header from "./Header";
import ChatBox from "./Chat";

export const FilteredDataContext = createContext();

const ProfilePage = () => {
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
  console.log(filteredData)

  return (
    <FilteredDataContext.Provider value={filteredData}>
      {filteredData.map((details) => {
        console.log("details:", details)
        const { id } = details;
        return (
          <div key={id} className="container">
            <Sidebar />
            <div className="main-section">
              <Header {...details} />
              <Outlet />
              <ChatBox />
            </div>
          </div>
        );
      })}
    </FilteredDataContext.Provider>
  );
};

export default ProfilePage;
