import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./Header"
import Sidebar from "./Sidebar"
import TextInput from "./TextInput"
import PostInput from "./PostInput"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import {auth, db} from "./firebase"
import Post from "./Post"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ChatRooms from "./ChatRooms"
import Profile from "./Profile"

function App() {
  const [{user}, dispatch] = useStateValue();
  const [posts, setPosts] = useState([]);

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



  useEffect(() => {
    // code runs here
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        );
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
                <Switch>
                <Route path="/room/:roomId">
          <ChatRooms/>
         
        </Route>
                <Route path="/profile">
                  <Profile/>
                </Route>
        <Route path="/">
         
       
                <div className="app__posts">       
                <Tabs>
                <TabList>
                  <div className="feed__tabs">
                    <Tab>Text Post & GIF</Tab>
                    <Tab>Photo Upload</Tab>
                    </div>
                </TabList>
                <TabPanel>
                <h2><TextInput/></h2>
                </TabPanel>
                <TabPanel>
                <PostInput/>
                </TabPanel>
            </Tabs>
                {posts.map(({ id, post }) => (
            <Post
              user={user}
              key={id}
              postId={id}
              username={post.username}
              caption={post.caption}
              imageUrl={post.imageUrl}
              userImage={post.userImage}
              timestamp={post.timestamp}
              likes={post.likes}
              likedBy={post.likedBy}
            />
          ))}
          </div>
          </Route>
         
        
          
        </Switch>
              </div>
          </>
          )}
     
      </Router>
    </div>
  );
}

export default App;
