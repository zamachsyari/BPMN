import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

//for fontawesomeicon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCubes, faTv,faBook, faChartBar, faPowerOff, faAudioDescription, faCogs } from '@fortawesome/free-solid-svg-icons'

export const DashSidebar = () => {
    return (
        <div className="dash-sidebar">
            <ul>
                <li className='li-active'><Link to="/dashboard"><FontAwesomeIcon icon={faAudioDescription} /></Link></li>
                <li><FontAwesomeIcon icon={faBook} /></li>
                <li><FontAwesomeIcon icon={faCubes} /></li>
                <li><FontAwesomeIcon icon={faTv} /></li>
                <li><FontAwesomeIcon icon={faChartBar} /></li>
                <li className='li-option'><FontAwesomeIcon icon={faCogs} /></li>
                <li><FontAwesomeIcon icon={faPowerOff} /></li>
            </ul>
        </div>
    )
}