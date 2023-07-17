import React, { useContext } from "react";
import { Img_url } from "./config";
import MapComponent from "./MapComponent";
import { FilteredDataContext } from "./ProfilePage";

const PersonDetail = () => {
  const filteredData = useContext(FilteredDataContext);
  return (
    <>
      {filteredData.map((data) => {
        const { id, name, username, email, phone, website, company, address } =
          data;
        return (
          <div key ={id}>
            <section className="person-section">
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
