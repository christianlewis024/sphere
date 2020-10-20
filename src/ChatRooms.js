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
        db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => setRoomMessages(snapshot.docs.map(doc => doc.data())))
    }, [roomId])
   
    return (
        <div className="chatRoom">
          {/* <h2>You are in the {roomId} chatRoom 🧖‍♂️ </h2> */}
          <div className="chatRoom__header">
              <div className="chatRoom__headerLeft">
                  <h4 className="chatRoom__channelName">
                    <strong>#{roomDetails?.name}</strong>
                    <StarBorderOutlinedIcon/>
                  </h4>
              </div>
              <div className="chatRoom__headerRight">
                  <p>
                <InfoOutlinedIcon/> Details
                </p>
              </div>
          </div>
          <div className="chatRoom__messages">
            {roomMessages.map(({message, timestamp, user, userImage}) => (
                <Message 
                message={message}
                timestamp={timestamp}
                user={user}
                userImage={userImage}
                />
            ))}
          </div>
            <ChatRoomInput channelName={roomDetails?.name} channelId={roomId} />



        </div>
    )
}

export default ChatRooms
