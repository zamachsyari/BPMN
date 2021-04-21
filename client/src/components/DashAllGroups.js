import React from 'react';

import Axios from 'axios';
import { UserContext } from '../context/userContext';

import { Models } from './Models';

import { DashHeader } from './DashHeader';
import { DashSidebar } from './DashSidebar';
import { DashNavigation } from './DashNavigation';
import { GroupPanel } from './GroupPanel';


export const GroupList = () => {
    return (
        
        <div>
            <DashSidebar/>
            <DashHeader/>
            <DashNavigation/>   
            <div className="dash-content">
                <GroupPanel></GroupPanel>
                <GroupPanel></GroupPanel>
                <GroupPanel></GroupPanel>

                <GroupPanel></GroupPanel>
                <GroupPanel></GroupPanel>
                <GroupPanel></GroupPanel>
            </div>
        </div>
    )
}