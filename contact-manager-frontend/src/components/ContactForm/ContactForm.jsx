import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import axios from 'axios';
import './ContactForm.css';

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
  };

  const contact = {
    name: name,
    phonenumber: phonenumber,
    latitude: latitude,
    longitude: longitude,
  };

  const submitContact = async() => {
    try {
      const reponse = await axios.post("http://127.0.0.1:8000/api/add_update_contact", contact);
      console.log(contact);
    } catch (e) {
      console.log(e);
    }
  }



  const position = [51.505, -0.09];

  return (
    <div className="container">
      <div className='margin'>
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
              onChange={(e) => setLatitude(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Longitude</label>
            <input
              type="text"
              name="longitude"
              placeholder="Longitude"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
          </div>
          <button className='add-button' onClick={submitContact}>Add</button>
        </form>
      </div>
      {/* <div className='map'>
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
      </div> */}
    </div>
  );
};

export default ContactForm;

