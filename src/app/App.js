import React from 'react';
// import logo from '../logo.svg';
import './App.css';
import NavBar from './component.Navbar/component.Navbar'
import User from './component.User/component.User.view'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <User unUser={{nom:"OTT", prenom:"Lydie"}}></User>
    </div>
  );
}

export default App;
