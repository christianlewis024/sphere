import React, { useState } from "react";
import firebase from "firebase";
import { storage, db } from "./firebase";
import {Avatar} from "@material-ui/core"
import "./PostInput.css"
import {useStateValue} from "./StateProvider";


function PostInput() {
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
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
              .then((imageUrl) => {
                setImageUrl(imageUrl);
    
                // post image inside db
                db.collection("posts").add({
                  imageUrl: imageUrl,
                  caption: caption,
                  username: user.displayName,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  likes: 0,
                });
    
                setProgress(0);
                setCaption("");
                setImageUrl("");
              });
          }
        );
      };
    
    return (
        <div className="postInput">
          
                <Avatar  className="postInput__avatar"src="https://pbs.twimg.com/profile_images/1289438305969254402/UBOYNi2s_400x400.jpg"/>
               
               
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
                        Submit Post
                    </button>
                    
                    </div>
                    <progress className="imageupload_progress" value={progress} max="100" />
           
 
            
        </div>
    )
}

export default PostInput
