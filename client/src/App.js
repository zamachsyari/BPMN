import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { AuthUI } from './components/AuthUI';

function App() {
  return (
    <div className="App">
        <AuthUI/>
    </div>
  );
}

export default App;
