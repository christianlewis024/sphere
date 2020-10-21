import React, {useState} from 'react'
import {useStateValue} from "./StateProvider"
import {Avatar} from "@material-ui/core"
import "./Profile.css"
import { auth } from './firebase'


function Profile() {
    const [{user}] = useStateValue()
    const [username, setUsername] = useState("");
    const [userImage, setUserImage] = useState('')
    

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
        </div>
    )
}

export default Profile
