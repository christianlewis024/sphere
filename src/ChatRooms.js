import React, {useState, useEffect} from 'react'
import "./ChatRooms.css"
import { useParams} from "react-router-dom"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import {db} from "./firebase"
import Message from "./Message"
import ChatRoomInput from "./ChatRoomInput"


function ChatRooms() {
    const {roomId} = useParams();
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])
    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomDetails(snapshot.data())
            ))
        }
        db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => setRoomMessages(snapshot.docs.map(doc => doc.data())))
    }, [roomId])
   
    return (
        <>
        <div className="chatRooms__container">
        <div className="chatRooms">
          {/* <h2>You are in the {roomId} chatRooms 🧖‍♂️ </h2> */}
          <div className="chatRooms__header">
              <div className="chatRooms__headerLeft">
                  <h4 className="chatRooms__channelName">
                    <strong>#{roomDetails?.name}</strong>
                    
                  </h4>
              </div>         
          </div>
          <div className="chatRooms__input">
          <ChatRoomInput channelName={roomDetails?.name} channelId={roomId} />
          </div>
          <div className="chatRooms__messages">
            {roomMessages.map(({message, timestamp, user, userImage}) => (
                <Message 
                message={message}
                timestamp={timestamp}
                user={user}
                userImage={userImage}
                />
            ))}
          </div>
          



        </div>
        
          </div>
          </>
    )
}

export default ChatRooms
