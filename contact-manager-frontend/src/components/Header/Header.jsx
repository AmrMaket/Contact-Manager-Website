import React from 'react';
import "./Header.css";
// import {Link, useNavigate} from "react-router-dom"


const Header = () => {
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
                    <span>Welcome TO Contact Manager</span>
                </div>
            </div>
        </>
        
     );
}
 
export default Header;