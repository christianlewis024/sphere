import React, { useEffect } from "react";
import './App.css';
import Header from "./Header"
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase"

function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">    
      <Router>
      {!user ? (
          <Login/>
        ) : (
          <>
        <Header/>
              <div className="app__body">
              <div className="app__banner">
                <img src="https://images.unsplash.com/photo-1592185152497-03502ba153ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
                </div>
                <Sidebar/>
                <Feed/>
              </div>
          </>
          )}
     
      </Router>
    </div>
  );
}

export default App;
