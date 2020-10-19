import React, { useState, useEffect } from "react";
import "./Post.css";
import Avatar from "@material-ui/core/Avatar";
import { db } from "./firebase";
import firebase from "firebase";
import Moment from "react-moment";
import 'moment-timezone';
function Post({ user, postId, username, caption, imageUrl, userImage, timestamp}) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
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

  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          alt={username}
          src={userImage}
        />
        <h3>{username}</h3>
        
      </div>
      <p><span className="post__timestamp"><Moment format="YYYY-MM-DD HH:mm"tz="Los_Angeles">{new Date(timestamp?.toDate()).toUTCString()}</Moment></span></p>
      <p className="post__text">
        "   {caption}   "
      </p>
      {/* header -> avatar + username */}

      <img className="post__image" src={imageUrl}></img>
      {/* image */}

     

      <div className="post__comments">
        {comments.map((comment) => (
          <p>
            <b>{comment.username}</b> {comment.text}
          </p>
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
