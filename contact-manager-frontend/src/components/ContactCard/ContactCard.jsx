import React from "react";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import './ContactCard.css';

export default function Cards() {
  const [cards, setCards] = useState([]);

  const fetchCards = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/show_contacts");
      setCards(response.data); // Update the state with the whole response data
    } catch (e) {
      console.log("API Error:", e.message);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  console.log("Cards:", cards);


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
      <div className="card-container">
        {cards && cards.map((card) => {
          return (
            <div className="card">
              <p>&#x1F9CD; Name: {card.name}</p>
              <p>&#128222; Phone number: {card.phone_number}</p>
              <p>
              &#x1F5FA; Adress: {card.latitude} / {card.longitude}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};

