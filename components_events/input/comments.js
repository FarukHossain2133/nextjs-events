import { useState, useEffect, useContext } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import NotificationContext from '../../store/notification-context';

function Comments(props) {
const [commentFetchLoading, setcommentFetchLoading] = useState(false)
  const { eventId } = props;
  const commentCtx = useContext(NotificationContext)
  const [showComments, setShowComments] = useState(false);
  const [comments, setcomments] = useState([]);

  useEffect(() => {
    if (showComments) {
      setcommentFetchLoading(true);
      fetch('/api/comments/' + eventId)
        .then(res => res.json())
        .then(data => {
          setcomments(data.comments)
          setcommentFetchLoading(false);
        })
    }
  }, [showComments])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);

  }

  function addCommentHandler(commentData) {
    // send data to API
    commentCtx.showNotification({
      title: "Sending comment...",
      message: "Your comment is storing",
      status: "pending"
    });
    fetch('/api/comments/' + eventId, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res =>{
        if(res.ok){
          return res.json()
        }
        return res.json().then(data=> {
          throw new Error(data.message || "Somethig went wrong")
        })
      })
      .then(data => {
        commentCtx.showNotification({
          title: "Success!",
          message: "Your comment is stored",
          status: "success"
        });
      }).catch(err => {
        commentCtx.showNotification({
          title: "Error!",
          message: err.message || "Your comment is storing failed",
          status: "error"
        });
      })

  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !commentFetchLoading && <CommentList items={comments} />}
      {showComments && commentFetchLoading && <p>Loading...</p>}
    </section>
  );
}

export default Comments;