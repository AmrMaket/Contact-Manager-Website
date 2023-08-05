import React, { useState } from 'react';
import './styles.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const add = (e) => {
    e.preventDefault();
    if (name === '' || phonenumber === '' || latitude === '' || longitude === '') {
      alert('All fields are mandatory!');
      return;
    }
    // Add contact to the database or do other operations
  };

  const position = [51.505, -0.09];

  return (
    <div className="container">
      <div>
        <h2>Add Contact</h2>
        <form className="ui main" onSubmit={add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="text"
              name="phonenumber"
              placeholder="Phone Number"
              value={phonenumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Latitude</label>
            <input
              type="text"
              name="latitude"
              placeholder="Latitude"
              value={latitude}
              readOnly
            />
          </div>
          <div className="field">
            <label>Longitude</label>
            <input
              type="text"
              name="longitude"
              placeholder="Longitude"
              value={longitude}
              readOnly
            />
          </div>
          <button className='add-button'>Add</button>
        </form>
      </div>
      <div className='map'>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {latitude && longitude && <Marker position={[latitude, longitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>}
        </MapContainer>
      </div>
    </div>
  );
};

export default ContactForm;