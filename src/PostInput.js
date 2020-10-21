import React, { useState } from "react";
import firebase from "firebase";
import { storage, db } from "./firebase";
import {Avatar} from "@material-ui/core"
import "./PostInput.css"
import {useStateValue} from "./StateProvider";
import Loader from 'react-loader-spinner'


function PostInput() {
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState("");
    const [{user}, dispatch] = useStateValue();
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        if (e.target.files[0])  {
          setImage(e.target.files[0]) ;
        }
      };
      const handleUpload = () => {
          setLoading(true)
        const uploadTask = storage.ref("images/" + image.name).put(image) 
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
                  imageUrl: imageUrl ,
                  caption: caption,
                  username: user.displayName,
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                  likes: 0,
                  userImage: user.photoURL,
                  userEmail: user.email
                });
    
                setProgress(0);
                setCaption("");
                setImageUrl("");
                setLoading(false)
              });
          }
        );
      };
    
    return (
        <div className="postInput">
          
                <Avatar  className="postInput__avatar"src={user.photoURL}/>
               
               
                <div className="postInput__top">
                    <input
                        className="postInput__input"
                        placeholder="Photo Caption"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                    />
                    </div>
                    <div className="postInput__bottom">
                    <input type="file"  className="postInput__file"  onChange={handleChange}
                    placeholder={`image URL (Optional)`} 
                    /> {loading ? (
                      <Loader
                      type="TailSpin"
                      color="white"
                      height={45}
                      width={45}
                      timeout={10000} //10 secs
                    />
                    ) : (
                      <button className="postInput__button"
                             onClick={handleUpload} >
                        Submit Photo
                    </button>
                    )}
                     
                    
                   
                    
                    </div>
                    <progress className="postInput__progress" value={progress} max="100" />
           
 
            
        </div>
    )
}

export default PostInput
