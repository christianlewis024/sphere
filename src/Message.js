import React from 'react'
import "./Message.css"
import Moment from "react-moment"


function Message({ message, timestamp, user, userImage}) {
    return (
        <div className="message">
            <div className="message__header">
            <img src={userImage} alt=""/>
            <h4>
                    {user}<span className="message__timestamp"><Moment format="YYYY-MM-DD HH:mm">{new Date(timestamp?.toDate()).toUTCString()}</Moment></span>

                </h4>
                </div>
            <div className="message__info">
                
                <div className="message__message">
                <p>{message}</p>
                </div>
            </div>
            
        </div>
    )
}

export default Message
