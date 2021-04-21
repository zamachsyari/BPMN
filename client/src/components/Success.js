import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { LandingHeader } from './LandingHeader';
import { LandingFooter } from './LandingFooter';

import './styles/Landing.css';

export const Success = () => {
    // const { user } = React.useContext(UserContext);
    return (
        <div>
            <LandingHeader/>
            <div className="landing-auth">
                <div className="landing-success">
                    <h3>Congrats, you have made an id</h3>
                    <p>Try to login :)</p>
                    <br></br>
                    <br></br>
                    <p className="login-btn">
                        <Link to="/">Login</Link>
                    </p>
                </div>
            </div>
            <LandingFooter/>
        </div> 
    )
}