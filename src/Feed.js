import React, {useState, useEffect} from 'react'
import "./Feed.css"
import Post from "./Post"
import PostInput from "./PostInput"
import {db} from "./firebase"

function Feed({user}) {
    const [posts, setPosts] = useState([]);

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
        // onSnapshot is a powerful listener. Every single time the database changes, added, modified, its like a camera and takes a snapshot of exactly what the database looks like, when someone adds to DB its going to update instantly
      }, []);
    return (
        <div className="feed">
            <PostInput/>
            {posts.map(({ id, post }) => (
            <Post
              user={user}
              key={id}
              postId={id}
              username={post.username}
              caption={post.caption}
              imageUrl={post.imageUrl}
              likes={post.likes}
            />
          ))}
        </div>
       
    )
}

export default Feed
