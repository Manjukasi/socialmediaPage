import React from "react";
import { Img_url, FETCH_URL } from "./config";
import MapComponent from "./MapComponent";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const PersonDetail = () => {
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
  return (
    <>
      {filteredData.map((data) => {
        const { id, name, username, email, phone, website, company, address } =
          data;
        return (
          <div key ={id}>
            <Header {...data} />
            <section className="section">
              <div className="first-section">
                <img
                  className="person-image"
                  src={`${Img_url}${id}.jpeg`}
                  alt="profile"
                />
                <div className="person-name">
                  <h2>{name}</h2>
                </div>
                <ul className="person details">
                  <li>Username :<span> {username}</span></li>
                  <li> e-mail : {email}</li>
                  <li>Phone : {phone}</li>
                  <li>Website : {website}</li>
                </ul>
                <div className="company">
                  <h2 className="company-name">Company</h2>
                  <ul className="company details">
                    <li>Name : {company.name}</li>
                    <li>catchphrase : {company.catchPhrase}</li>
                    <li>bs : {company.bs}</li>
                  </ul>
                </div>
              </div>
              <section className="second-section">
                <h2 className="address">Address: </h2>
                <ul className="address details">
                  <li>Street : {address.street}</li>
                  <li> Suite : {address.suite}</li>
                  <li> City : {address.city}</li>
                  <li> Zipcode : {address.zipcode}</li>
                </ul>
                <div className="map">
                  <MapComponent address={address.geo} />
                  <ul className="map-details">
                    <li>Lat: {address.geo.lat}</li>
                    <li>Long: {address.geo.lng}</li>
                  </ul>
                </div>
              </section>
            </section>
          </div>
        );
      })}
    </>
  );
};

export default PersonDetail;
