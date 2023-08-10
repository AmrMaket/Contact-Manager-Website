import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import axios from "axios";
import "./Map.css"
import "leaflet/dist/leaflet.css"

import { Icon, divIcon, point } from "leaflet";
import { useEffect } from "react";

const customIcon = new Icon({
    iconUrl: require("./marker.png"),
    iconSize: [38, 38]
});

const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    });
};

let markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "Hello, I am pop up 1"
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Hello, I am pop up 2"
    },
    {
      geocode: [48.855, 2.34],
      popUp: "Hello, I am pop up 3"
    }
  ];
  const fetchContacts = async ()=>{
    await axios.get("http://localhost:8000/api/show_contacts")
    .then(response => {
        response.data.map( (contact) => {return {
            ...markers,
            geocode: [contact.longitude, contact.lattitude],
            popUp: contact.name,
          }});
    })
    }
    

const Map = () => {
    useEffect(()=>{
        fetchContacts()
    })
    return(
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
        <MapContainer center={[48.8566, 2.3522]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
      </>
        )
}

export default Map;