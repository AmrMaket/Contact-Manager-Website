import React, { Component } from 'react';

const ContactForm = () => {

    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.phone_number === "" || this.state.address === ""){
            alert("All fields are mandatory!");
            return;
        }
    }

    return ( 
        <div className="ui main">
            <h2>Add Contact</h2>
            <form className='ui main' onSubmit={ this.add }></form>
        </div>
     );
}
 
export default ContactForm;

