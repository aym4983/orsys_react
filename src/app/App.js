import React from 'react';
// import logo from '../logo.svg';
import './App.css';
import NavBar from './component.Navbar/component.Navbar'
import User from './component.User/component.User.view'
import UserList from './component.User/component.User.list'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <UserList userList={
        [
          {nom:"nom 1", prenom:"prenom 1", service:"s1"},
          {nom:"nom 2", prenom:"prenom 2", service:"s2"}
        ]
      }></UserList>
      <User unUser={{nom:"OTT", prenom:"Lydie", service:"Informatique"}}></User>
    </div>
  );
}

export default App;
