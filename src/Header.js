import React from 'react'
import "./Header.css"
import {Avatar} from "@material-ui/core"
import {useStateValue} from "./StateProvider"
import { auth } from './firebase'
import { Link } from 'react-router-dom'


function Header() {
    const [{ user }, dispatch] = useStateValue();
    const login = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
           <div className="header__left">
               
               <Link to="/"><img className="header__img" src="logowithborder.png" alt=""/></Link>
           
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
               <div className="header__postsLink">
               <Link to="/">Posts</Link>
               </div>
               <div className="header__logout">
               <Link to={!user && "/login"} className="header__link">
            <div onClick={login}>           
            <span>{user ? 'Log Out' : 'Sign In'}</span>
            </div>
            </Link>
            </div>
               
           </div>
           <div className="header__right">
               
           
               <div className="header__avatar">
                <Link to="/profile">
               <Avatar
               src={user.photoURL}/>
               </Link>
               </div>
           </div>
           
        </div>
    )
}

export default Header
