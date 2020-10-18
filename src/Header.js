import React from 'react'
import "./Header.css"
import {Avatar} from "@material-ui/core"
import {useStateValue} from "./StateProvider"
import { auth } from './firebase'
import { Link } from 'react-router-dom'


function Header() {
    const [{ basket, user }, dispatch] = useStateValue();
    const login = () => {
        if (user) {
            auth.signOut();
        }
    }
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
               <div className="header__option">
               <Link to={!user && "/login"} className="header__link">
            <div onClick={login}>           
            <span>{user ? 'Log Out' : 'Sign In'}</span>
            </div>
            </Link>
            </div>
               
           </div>
           <div className="header__right">
               
           
               <div className="header__avatar">
               <Avatar
               src="https://pbs.twimg.com/profile_images/1289438305969254402/UBOYNi2s_400x400.jpg"/>
               </div>
           </div>
           
        </div>
    )
}

export default Header
