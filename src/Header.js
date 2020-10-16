import React from 'react'
import "./Header.css"


function Header() {
    return (
        <div className="header">
           <div className="header__left">
           <img src="logowithborder.png" alt=""/>
           <div className="header__input">
               <input placeholder="Search The Sphere"/> 
           </div>
           </div>
           
        </div>
    )
}

export default Header
