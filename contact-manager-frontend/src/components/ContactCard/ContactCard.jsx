import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import './ContactCard.css';

export default function Cards() {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    try{
      const response = await axios.get("http://127.0.0.1:8000/api/show_contacts");
      setCards(response.data.contacts);
    }catch (e){
      console.log(e.message);
    }  
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const customIcon = new Icon({
    iconUrl: '../marker.png',
    iconSize: [32, 32],
  });

  return (
    <>
      <div>
        {cards.map((contact) => (
          <div className="card" key={contact.id}>
            <p>Name: {contact.name}</p>
            <p>Phone number: {contact.phone_number}</p>
            <p>
              Address: {contact.latitude}-{contact.longitude}
            </p>
          </div>
        ))}
      </div>
      <MapContainer center={[51.505, -0.09]} zoom={2} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cards.map((contact) => (
          <Marker position={[contact.latitude, contact.longitude]} icon={customIcon} key={contact.id}>
            <Popup>
              {contact.name} <br /> {contact.phone_number}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
