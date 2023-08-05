import React, { useState } from 'react';
import './styles.css';

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
   integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
   crossorigin=""/>;

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
   integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
   crossorigin=""></script>;

const ContactForm = () => {

    const [name, setName] = useState("");
    const [phonenumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");
    const position = [51.505, -0.09]


    const add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.phonenumber === "" || this.state.address === ""){
            alert("All fields are mandatory!");
            return;
        }
    };
    return ( 
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className='ui main' onSubmit={ add }>
                <div className='field'>
                    <label>Name</label>
                    <input 
                    type ='text'
                    name = 'name'
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label>Phone Number</label>
                    <input 
                    type ='text'
                    name = 'phonenumber'
                    placeholder='Phone Number'
                    value={name}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className='map'>
        
        render(
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        )        
                </div>
            </form>
        </div>
    );
}

export default ContactForm;

