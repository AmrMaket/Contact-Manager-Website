import React from 'react';
import "./Header.css";
// import {Link, useNavigate} from "react-router-dom"


const Header = () => {
    return ( 
        <div className='navbar'>
            <div className='logo'>
                {/* <img src="../../assets/logo.jpg" alt="logo" className="logo"/> */}
                <h1>Contact Manager</h1>
            </div>
            <a href='./ContactCard'>View All Contacts</a>
            <a href='./ContactForm'>Create Contacts</a>
            <a href='./map'>Map</a>
        </div>
     );
}
 
export default Header;