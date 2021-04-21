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

export const Login = () =>{
    const {user, setUser} = React.useContext(UserContext);
    const handleLogin = (e) =>{
        e.preventDefault();
        const username= e.target.username.value;
        const password= e.target.password.value;

        axios.post("http://localhost:8000/user/login", {
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
                    <h4>Please log in your account</h4>
                    <div className="form-auth">
                        <form onSubmit={handleLogin}>
                            <label>Username:</label>
                            <input type="text" name="username" placeholder="" required/><br/>
                            <label>Password:</label>
                            <input type="password" name="password" placeholder="" required/><br/>
                            <p>Caution : if you didnt have an account, please click <span><Link to="/signup"> this</Link></span> to make an account</p>
                            <button>Login</button>
                        </form>
                    </div>
                </div>
            </div>
            <LandingFooter/>
        </div>
    )
}