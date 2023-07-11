import React, { useEffect, useState } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';

const MapComponent = (props) => {
  const { address, google } = props;
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  const mapStyles = {
    width: '600px',
    height: '270px'
  };

  useEffect(() => {
    if (address && address.lat && address.lng && google) {
      setLat(address.lat * 1);
      setLng(address.lng * 1);
    }
  }, [address, google]);

  useEffect(() => {
    const loadMap = () => {
      const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 14
      });

      new google.maps.Marker({
        position: { lat, lng },
        map: map
      });
    };

    if (google && lat !== null && lng !== null) {
      loadMap();
    }
  }, [google, lat, lng]);

  return <div id="map" style={mapStyles}></div>;
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBOW-rUg6ekCogm8rpA5eXjjRrssr0ZoNU'
})(MapComponent);
