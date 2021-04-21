import React from 'react';

import Axios from 'axios';
import { UserContext } from '../context/userContext';

import { Models } from './Models';

import { DashHeader } from './DashHeader';
import { DashSidebar } from './DashSidebar';
import { DashNavigation } from './DashNavigation';
import { GroupPanel } from './GroupPanel';


export const Profile = () => {
    const { user } = React.useContext(UserContext);
    return (
        
        <div>
            <DashSidebar/>
            <DashHeader/>
            <DashNavigation/>   
            <div className="dash-content">
                <div className="user-photo">
                </div>
                <div className="user-right-photo">
                    <h3>Nama : {user.firstName} {user.lastName} </h3>
                    <h3>Umur : {user.ageUser} </h3>
                    <h3>Jenis Kelamin : {user.jkUser} </h3>
                    <h3>Alamat : {user.address}, {user.cityUser} </h3>
                    <h3>No HP : {user.phoneUser} </h3>
                    <br></br>
                    <h3>Role  : {user.roleUser}</h3>
                    <h3>Email : {user.emailUser}</h3>
                </div>
                <div className="user-bot-photo">
                    <h4>{user.firstName} {user.lastName} </h4>
                    <h5>{user.nikUser}</h5>
                </div>
            </div>
        </div>
    )
}