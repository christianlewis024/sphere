import React, {useState, useEffect} from 'react'
import "./Feed.css"
import Post from "./Post"
import PostInput from "./PostInput"
import {db} from "./firebase"

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
              userImage={post.userImage}

            />
          ))}
        </div>
       
    )
}

export default Feed
