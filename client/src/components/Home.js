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

export const Home = () => {
    return (
        <div>
            <LandingHeader/>
            <div className="landing-auth">
                <div className="landing-content">
                    <h4>Welcome to our bpmn apps</h4>
                    <h1>This easy app to use, for making bussiness process in an organization</h1>
                    <h5>if u want to login click login, but if u didnt have and account <br/> click <span><Link to="/signup">this</Link></span> for make an account</h5>
                    <p className="login-btn">
                        <Link to="/login">Login</Link>
                    </p>
                    {/* <nav className="nav-landing">
                        <ul>

                            <li>
                            <Link to="/login">Login</Link>
                            </li>
                            <li>
                            <Link to="/signup">Signup</Link>
                            </li>
                        </ul>
                    </nav> */}
                </div>
            </div>
            <LandingFooter/>
        </div>
    )
}