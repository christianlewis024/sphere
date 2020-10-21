import React, { useState, useEffect } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "./firebase";
import firebase from "firebase";
import Moment from "react-moment";
import 'moment-timezone';
import FavoriteIcon from '@material-ui/icons/Favorite';



function Post({ user, likes, likedBy, postId, username, caption, imageUrl, userImage, timestamp}) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [likeCount, setLikeCount] = useState(0);
  useEffect(() => {
    
    if (postId) {
      db.collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }
   
  }, [postId]);

  useEffect(() => {
    
    if (postId) {
      db.collection("posts")
        .doc(postId)
        .collection("likedBy")        
        .onSnapshot((snapshot) => {
          setLikeCount(snapshot.docs.map((doc) => doc.data()));
        });
    }
   
  }, [postId]);
  const postComment = (e) => {
    e.preventDefault();

    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      userEmail: user.email,
      username: user.displayName,
      userImage: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment("");
  };
  const addLike = (e) => {
    e.preventDefault();

    db.collection("posts").doc(postId).collection("likedBy").doc(user.email).set({
      
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      likedBy: user.email
    })
  }
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__usernameAvatar">
        <Avatar
          className="post__avatar"
          alt={username}
          src={userImage}
        />
        <h3>{username}</h3> 
        </div>
        <div className="post__likes">
        <h3>{likeCount.length} Likes</h3>
        <div  onClick={addLike} className="post__addLikes"><FavoriteIcon/></div>
        </div>
      </div>
      <div className="post__middle">
        <div className="post__timestamp">
      <p><span><Moment format="YYYY-MM-DD HH:mm">{new Date(timestamp?.toDate()).toUTCString()}</Moment></span></p>      
      </div>
      
     
        </div>
      <p className="post__text">
        "   {caption}   "
      </p>
      {/* header -> avatar + username */}

      <img className="post__image" src={imageUrl}></img>
      {/* image */}

     

      <div className="post__comments">
        {comments.map((comment) => (
          <div className="post__commentRow">
          
            <Avatar className="post__commentAvatar" src={comment.userImage}/>
            
            <b>{comment.username}</b> <p className="post__commentText">{comment.text}</p>
          
          </div>

        ))}
      </div>
          {user && (
      <form className="post__commentBox">
        <input
          className="post__input"
          type="text"
          placeholder="add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className="post__button"
          disabled={!comment}
          type="submit"
          onClick={postComment}
        >
          Post
        </button>
      </form>
      )}
    </div>
  );
}

export default Post;
