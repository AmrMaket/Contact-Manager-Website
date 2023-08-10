import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css';

export default function ContactForm() {
  const [contact, setContact] = useState({
    name: "",
    phone_number: "",
    latitude: "",
    longitude: "",
  });

  const handleDataChange = (e) => {
    setContact({ ...contact, [e.target.id]: e.target.value });
  };

  const add = (e) => {
    e.preventDefault();
    if (contact.name === '' || contact.phone_number === '' || contact.latitude === '' || contact.longitude === '') {
      alert('All fields are mandatory!');
      return;
    }
  };

  const submitContact = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/api/add_update_contact", contact);
      console.log(contact);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className='container'>
        <div className='navbar'>
          <div className='logo'>
            <h1>Contact Manager</h1>
          </div>
            <a href='./'>Home</a>
            <a href='./cards'>View All Contacts</a>
            <a href='./addContacts'>Create Contacts</a>
            <a href='./map'>Map</a>
        </div> 
        <div className='body'>
        </div>
      </div>      
    <div className="container">
      <div className='margin'>
        <h2>Add Contact</h2>
        <form className="ui main" onSubmit={add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              name='name'
              onChange={handleDataChange}
            />
          </div>
          <div className="field">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone_number"
              id="phone_number"
              placeholder="Phone Number"
              onChange={handleDataChange}
            />
          </div>
          <div className="field">
            <label>Latitude</label>
            <input
              type="text"
              id="latitude"
              placeholder="Latitude"
              name='latitude'
              onChange={handleDataChange}
            />
          </div>
          <div className="field">
            <label>Longitude</label>
            <input
              type="text"
              name="longitude"
              id="longitude"
              placeholder="Longitude"
              onChange={handleDataChange}
            />
          </div>
          <button type="submit" className='add-button' onClick={submitContact}>Add</button>
        </form>
      </div>
    </div>
    </>
  );
};
