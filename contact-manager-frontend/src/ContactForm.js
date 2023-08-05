import React from 'react';

const ContactForm = () => {
    state = {
        name : "",
        phonenumber : "",
        address : ""
    };
    add = (e) => {
        e.preventDefault();
        if(this.state.name === "" || this.state.phonenumber === "" || this.state.address === ""){
            alert("All fields are mandatory!");
            return;
        }
    };
    render() {
        return ( 
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className='ui main' onSubmit={ this.add }>
                    <div className='field'>
                        <label>Name</label>
                        <input 
                        type ='text'
                        name = 'name'
                        placeholder='Name'
                        onChange={(e) => this.setState ({ name : e.target.value})} 
                        />
                    </div>
                    <div className='field'>
                        <label>Phone Number</label>
                        <input 
                        type ='text'
                        name = 'phonenumber'
                        placeholder='Phone Number'
                        onChange={(e) => this.setState ({ phonenumber : e.target.value})} 
                        />
                    </div>
                    <div className='field'>
                        <label>Address</label>
                        <input 
                        type =''
                        name = 'phonenumber'
                        placeholder='Phone Number'
                        onChange={(e) => this.setState ({ phonenumber : e.target.value})} 
                        />
                    </div>
                </form>
            </div>
        );
    }
}
 
export default ContactForm;

