import React from 'react';
import Axios from 'axios';
import { UserContext } from '../context/userContext';

import { Models } from './Models';

import { DashHeader } from './DashHeader';
import { DashSidebar } from './DashSidebar';
import { DashNavigation } from './DashNavigation';
import { DashAllModels } from './DashAllModels';

import Modeler from "./Modeler";


import "bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css"
import './styles/Dashboard.css';

export const Dashboard = () => {
    const { user } = React.useContext(UserContext);
    return (
        <div>
            <DashSidebar/>
            <DashHeader/>
            <DashNavigation/>
            <DashAllModels/>
        </div> 
    )
}