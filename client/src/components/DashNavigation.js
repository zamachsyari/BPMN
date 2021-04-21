import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  
import { UserContext } from '../context/userContext';

export const DashNavigation = () => {
    const { user } = React.useContext(UserContext);
    if(user.roleUser == "Manager"){
        return (
            <div className="dash-navigation">
                <ul>
                    <li><Link to="/editorBPMN">Create BPMN</Link></li>
                    <li>Open BPMN</li>
                    <li>Search BPMN</li>
                    <li><Link to="/groupList">Group List</Link></li>
                    <li>Make Group</li>
                    <li>Join Group</li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </div>
        )
    }
    else {
        return (
            <div className="dash-navigation">
                <ul>
                    <li><Link to="/editorBPMN">Create BPMN</Link></li>
                    <li>Open BPMN</li>
                    <li>Search BPMN</li>
                    <li><Link to="/groupList">Group List</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </div>
        )
    }
    // return (
    //     <div className="dash-navigation">
    //         <ul>
    //             <li><Link to="/editorBPMN">Create BPMN</Link></li>
    //             <li>Open BPMN</li>
    //             <li>Search BPMN</li>
    //             <li><Link to="/groupList">Group List</Link></li>
    //             {test1}
    //             {test2}
    //             <li>Make Group</li>
    //             <li>Join Group</li>
    //             <li><Link to="/profile">Profile</Link></li>
    //         </ul>
    //     </div>
    // )
}