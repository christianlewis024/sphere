import React, {useState, useEffect} from 'react'
import "./Feed.css"
import Post from "./Post"
import PostInput from "./PostInput"
import {db} from "./firebase"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TextInput from "./TextInput"

function Feed({user}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {       
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
        <div className="feed">
            <Tabs>
                <TabList>
                    <Tab>New post and or GIF</Tab>
                    <Tab>Upload a Photo</Tab>
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
              likes={post.likes}
              userImage={post.userImage}
              timestamp={post.timestamp}

            />
          ))}
        </div>
       
    )
}

export default Feed
