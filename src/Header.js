import React from 'react'
import "./Header.css"
import {Avatar} from "@material-ui/core"


function Header() {
    return (
        <div className="header">
           <div className="header__left">
               <div className="header__img">
           <img src="logowithborder.png" alt=""/>
           </div>
           <div className="header__input">
               <input placeholder="Search The Sphere"/> 
           </div>
           </div>
           <div className="header__center">        
               <div className="header__option">
                   <h4>Notifications</h4>
               </div>
               <div className="header__option">
                   <h4>Friends</h4>
               </div>
               <div className="header__option">
                   <h4>Posts</h4>
               </div>
               
           </div>
           <div className="header__right">
               
               <div className="header__login">
               <h5>Log In</h5>
               <h3>Sign Up</h3>
               </div>
               <div className="header__avatar">
               <Avatar
               src="https://pbs.twimg.com/profile_images/1289438305969254402/UBOYNi2s_400x400.jpg"/>
               </div>
           </div>
           
        </div>
    )
}

export default Header
