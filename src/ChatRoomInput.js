import React, {useState} from 'react'
import "./ChatRoomInput.css"
import {Button} from "@material-ui/core"
import {useStateValue} from "./StateProvider"
import {db} from "./firebase"
import firebase from "firebase"


function ChatRoomInput({ channelName, channelId}) {

    const [input, setInput] = useState('');
    const [{user}] = useStateValue();
    const sendMessage = e => {
        e.preventDefault();
        if (channelId) {
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL,
            })
        }
        setInput("");
    }
    return (
        <div className="chatRoom__input">
            <form>
                <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder={`Message #${channelName}`}
                />
                <button type="submit" onClick={sendMessage}>SEND</button>
            </form>
        </div>
    )
}

export default ChatRoomInput
