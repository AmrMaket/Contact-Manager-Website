import React from 'react';
import Header from './components/Header/Header';
import ContactForm from './components/ContactForm/ContactForm';
import ContactCard from './components/ContactCard/ContactCard';
import Map from './components/Map/Map';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';

 
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/addContacts" element={<ContactForm />}></Route>
          <Route path="/cards" element={<ContactCard />}></Route>
          <Route path="/map" element={<Map />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
