import React from 'react';
import Axios from 'axios';
import { UserContext } from '../context/userContext';

import { Models } from './Models';

import { DashHeader } from './DashHeader';
import { DashSidebar } from './DashSidebar';
import { DashNavigation } from './DashNavigation';


import Modeler from "./Modeler";


import "bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css"
import './styles/Dashboard.css';

export const EditorBPMN = () => {
    const { user } = React.useContext(UserContext);
    return (
        <div>
            <DashSidebar/>
            <DashHeader/>
            <Modeler />
            {/* <div className="dash-content">
                <div id="main-wrapper">
                    <div id="canvas"> */}
                        {/* <Modeler /> */}
                    {/* </div>
                </div> */}
                {/* <h3>Welcome to dashboard</h3>
                <h1>{user.username}'s </h1><br/>
                {user.bmodels.map(bmodel => {
                    return <Models key={bmodel._id} post={bmodel} />
                })} */}
            {/* </div> */}
        </div> 
    )
}