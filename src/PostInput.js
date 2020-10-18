import React, { useState } from "react";
import firebase from "firebase";
import { storage, db } from "./firebase";
import {Avatar} from "@material-ui/core"
import "./PostInput.css"
import {useStateValue} from "./StateProvider";


function PostInput() {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState("");
    const [{user}, dispatch] = useStateValue();

    const handleChange = (e) => {
        if (e.target.files[0]) {
          setImage(e.target.files[0]);
        }
      };
      const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // progress function ...
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(progress);
          },
          (error) => {
            // Error function ...
            console.log(error);
          },
          () => {
            // complete function ...
            storage
              .ref("images")
              .child(image.name)
              .getDownloadURL()
              .then((url) => {
                setUrl(url);
    
                // post image inside db
                db.collection("posts").add({
                  imageUrl: url,
                  caption: caption,
                  username: user.email,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                });
    
                setProgress(0);
                setCaption("");
                setImage(null);
              });
          }
        );
      };
    
    return (
        <div className="postInput">
          
                <Avatar  className="postInput__avatar"src="https://pbs.twimg.com/profile_images/1289438305969254402/UBOYNi2s_400x400.jpg"/>
               
                <progress className="imageupload_progress" value={progress} max="100" />
                <div className="postInput__top">
                    <input
                        className="postInput__input"
                        placeholder="Update Status"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                    />
                    </div>
                    <div className="postInput__bottom">
                    <input type="file"  onChange={handleChange}
                    placeholder={`image URL (Optional)`}
                    />
                    <button className="imageupload_button"
                             onClick={handleUpload} >
                         Select Image
                    </button>
                    </div>
                
           
 
            
        </div>
    )
}

export default PostInput
