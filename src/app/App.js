import React from 'react';
// import logo from '../logo.svg';
import './App.css';
import NavBar from './component.Navbar/component.Navbar'
import User from './component.User/component.User.view'
import Tchat from './component.Tchat/component.Tchat'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


const ADR_SRV = 'http://localhost:3210';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/home"><div className="Home">DEMAT</div></Route>
          <Route path="/users"></Route>
          <Route path="/tchat">
            <Tchat adrsrv={ADR_SRV}></Tchat>
          </Route>
          <Route path="/user/:id">
            <User adrsrv={ADR_SRV}></User>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
