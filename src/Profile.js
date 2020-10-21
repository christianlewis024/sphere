import React, {useState, useEffect} from 'react'
import {useStateValue} from "./StateProvider"
import {Avatar} from "@material-ui/core"
import "./Profile.css"
import { db } from './firebase'
import Post from "./Post"


function Profile() {
    const [{user}] = useStateValue()
    const [username, setUsername] = useState("");
    const [userImage, setUserImage] = useState('')
    const [posts, setPosts] = useState([]);
    
    

    const updatePic = e => {
        // e.preventDefault();
        user.updateProfile({
            photoURL: userImage
        })
        setTimeout(function(){window.location.reload()}, 2000)
       
    

    }
    const updateUsername = e => {
        e.preventDefault();
        user.updateProfile({
            displayName: username
        })
        setTimeout(function(){window.location.reload()}, 2000)
        
    

    }
    useEffect(() => {
        // code runs here
        db.collection("posts").where("username", "==", user.displayName ).onSnapshot((snapshot) => {
            setPosts(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                post: doc.data(),
              }))
            ) ;
          });
       
      }, [] );
      console.log(posts)
     
    
    return (
        <div className="profile">
            <div className="profile__top">
                <h2>Your Profile:</h2>
                <h4>Email: {user.email}</h4>                
            </div>
            <div className="profile__middle">
                <div className="profile__pic">
                    <Avatar className="profile__avatar" src={user.photoURL}/>
                    <input placeholder="new photo URL" type="text" value={userImage} onChange={(e) => setUserImage(e.target.value)}/><button onClick={updatePic} >submit</button>
                </div>
                <div className="profile__username">
                    <h4>Username: {user.displayName}</h4>     
                    <input placeholder="enter new username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} /> <button onClick={updateUsername}>submit</button> 
                </div>      
            </div>
            <div className="profile__bottom">
                <h2>Your Posts:</h2>
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
        </div>
    )
}

export default Profile
