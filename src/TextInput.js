import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import './TextInput.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {useStateValue} from "./StateProvider";
import firebase from "firebase"
import {db} from "./firebase"


function TextInput() {
    const [input, setInput] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [{user}, dispatch] = useStateValue();

    const handleSubmit = (e) => {
        e.preventDefault();

       
        db.collection('posts').add({
           caption: input,
           timestamp: firebase.firestore.FieldValue.serverTimestamp(),
           userImage: user.photoURL,
           username: user.displayName,
           imageUrl: imageUrl, 
           likes: 0
        })  

        setInput("");
        setImageUrl("");
    };
    

    return (
        <div className='textInput'>        
            <div className="textInput__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <div className="textInput__textarea">
                    <textarea 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="textInput__input"
                        placeholder={` ${user.displayName}'s status:`} 
                    />
                    </div>
                    <div>
                    <input
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}   
                        placeholder={`gif or photo URL`}
                    />
                    </div>

                    <button  onClick={handleSubmit}type="submit">
                        Submit
                    </button>
                </form>
            </div>  
        </div>
    )
}

export default TextInput;