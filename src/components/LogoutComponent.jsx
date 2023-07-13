import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Img_url } from "./config";

const Logout = (data) => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filteredDataJSON = localStorage.getItem("filteredData");
    const retrievedFilteredData = JSON.parse(filteredDataJSON);
    setFilteredData(retrievedFilteredData);
  }, [filteredData]);
    console.log("logout:", filteredData)
  return (
    <div className="logout-tab">
      <div>
        <img src={`${Img_url}${data.id}.jpeg`} alt="Profile" />
        <h2>{data.name}</h2>
        <h3>{data.email}</h3>
      </div>
      <div>{filteredData.name}</div>
      <Link to="/">
        <button className="logout-button">Logout</button>
      </Link>
    </div>
  );
};

export default Logout;
