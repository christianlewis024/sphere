import React from 'react'
import "./Message.css"


function Message({ message, timestamp, user, userImage}) {
    return (
        <div className="message">
            <div className="message__header">
            <img src={userImage} alt=""/>
            <h4>
                    {user}<span className="message__timestamp">{new Date(timestamp?.toDate()).toUTCString()}</span>

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
