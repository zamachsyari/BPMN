import React from 'react';
import { UserContext } from '../context/userContext';

export const DashHeader = () => {
    const { user } = React.useContext(UserContext);
    return (
        <div className="dash-header">
            <h3>Welcome to BPMN - APP : {user.username}'s</h3>
        </div>
    )
}