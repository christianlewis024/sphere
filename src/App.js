import React from 'react';
import './App.css';
import Header from "./Header"
import Sidebar from "./Sidebar"
import Feed from "./Feed"
function App() {
  return (
    <div className="app">    
      
      <Header/>
      <div className="app__body">
      <div className="app__banner">
        <img src="https://images.unsplash.com/photo-1592185152497-03502ba153ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
        </div>
        <Sidebar/>
        <Feed/>
      </div>
      
    </div>
  );
}

export default App;
