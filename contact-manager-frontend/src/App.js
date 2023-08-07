import React from 'react';
import Header from './components/Header/Header';
import ContactForm from './components/ContactForm/ContactForm';
import ContactCard from './components/ContactCard/ContactCard'
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';

 
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/addContacts" element={<ContactForm />}></Route>
          <Route path="/cards" element={<ContactCard />}></Route>
          {/* <Route 
          path="/map"
          element={
            <div className="">
              <MapContainer
                className=""
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]} draggable>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          }>
          // </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
