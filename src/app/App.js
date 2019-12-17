import React from 'react';
// import logo from '../logo.svg';
import './App.css';
import NavBar from './component.Navbar/component.Navbar'
import User from './component.User/component.User.view'
import Tchat from './component.Tchat/component.Tchat'

const ADR_SRV='http://localhost:3210';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Tchat adrsrv={ADR_SRV}></Tchat>
      <User unUser={{nom:"OTT", prenom:"Lydie", service:"Informatique"}}></User>
    </div>
  );
}

export default App;
