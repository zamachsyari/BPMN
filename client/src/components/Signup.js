import React from 'react';
import axios from 'axios';
import { UserContext } from '../context/userContext';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import { LandingHeader } from './LandingHeader';
import { LandingFooter } from './LandingFooter';

export const Signup = () =>{
    const {user, setUser} = React.useContext(UserContext);
    const handleSignup = (e) =>{
        e.preventDefault();
        const username= e.target.username.value;
        const password= e.target.password.value;


        // fetch(`http://localhost:8000/signup?username=${username}&password=${password}`)
        // .then(res => res.json())
        // .then(data => console.log(data));

        axios.post("http://localhost:8000/user/signup", {
            "username": username,
            "password": password
        })
        .then(response =>{
            setUser(response.data)
            localStorage.setItem('userid', response.data._id);
        });

        e.target.username.value = "";
        e.target.password.value = "";
    }
    return (
        <div>
            <LandingHeader/>
            <div className="landing-auth">
                <div className="landing-content">
                    <h4>Please create and account</h4>
                    <div className="form-auth">
                        <form onSubmit={handleSignup}>
                            <label>Username:</label>
                            <input type="text" name="username" placeholder="" required/><br/>
                            <label>Password:</label>
                            <input type="password" name="password" placeholder="" required/><br/>
                            <br></br>
                            <button>Signup</button>
                        </form>
                    </div>
                </div>
            </div>
            <LandingFooter/>
        </div>
    )
}