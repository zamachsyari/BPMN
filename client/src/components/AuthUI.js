import React from 'react';
import Axios from 'axios';
import { UserContext } from '../context/userContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
  Redirect
} from "react-router-dom";

import {Home} from './Home';
import {Login} from './Login';
import {Signup} from './Signup';
import {Dashboard} from './Dashboard';
import {Success} from './Success';
import {EditorBPMN} from './EditorBPMN';
import {Profile} from './Profile';
import {GroupList} from './DashAllGroups';


export const AuthUI = () =>{
    const [user, setUser] = React.useState(null);
    const currentUser = React.useMemo(()=>({user, setUser}), [user, setUser]);
    React.useEffect(()=>{
        if(localStorage.getItem('userid') !== null){
            Axios.post('http://localhost:8000/user/login', {
                "userid": localStorage.getItem('userid')
            })
                .then(response => setUser(response.data));
        }
    }, []);
    return(
        <div>
            <UserContext.Provider value={currentUser}>
            <Router>
                <Route path="/" exact component={Home}/>
                <Route path="/login" component={Login}>
                    {user!==null?<Redirect to="/dashboard"/>:<Login/>}
                </Route>
                <Route path="/signup">
                    {user!==null?<Redirect to="/success"/>:<Signup/>}
                </Route>
                <Route path="/dashboard">
                    {user===null?<Redirect to="/login"/>:<Dashboard/>}
                </Route>
                <Route path="/success" component={Success}/>
                <Route path="/editorBPMN" component={EditorBPMN}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/groupList" component={GroupList}/>
            </Router>
            </UserContext.Provider>

        </div>
    )
}