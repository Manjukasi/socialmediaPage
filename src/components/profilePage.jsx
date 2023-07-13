import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import { Outlet, useParams } from "react-router-dom";
import { FETCH_URL } from "./config";
import Header from "./Header";
import ChatBox from "./Chat";

const ProfilePage = () => {
  const [person, setPerson] = useState([]);
  const test = useParams();

  useEffect(() => {
    callDetails();
  }, []);

  async function callDetails() {
    const response = await fetch(FETCH_URL);
    const data = await response.json();
    setPerson(data.users);
  }

  const filteredData = person.filter(
    (persons) => persons.id === test.profileId * 1
  );

  useEffect(() => {
    const filteredDataJSON = JSON.stringify(filteredData);
    localStorage.setItem("filteredData", filteredDataJSON);
  }, [filteredData]);

  console.log(filteredData)

  return (
    <>
      {filteredData.map((details) => {
        const {id} = details  
        return (
          <div key= {id} className="container">
            <Sidebar />
            <div className="main-section">
              <Header {...details} />
              <Outlet />
              <ChatBox />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProfilePage;
