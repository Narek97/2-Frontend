import { useEffect, useState } from "react";
import classes from "./Comments.module.css";
import NewComment from "./NewComment";
import CommentList from "./CommentList";

const Comments = ({ eventId }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  };

  const addCommentHandler = (commentData) => {
    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    if (showComments) {
      fetch(`/api/comments/${eventId}`)
        .then((res) => res.json())
        .then((data) => setComments(data.comment));
    }
  }, [eventId, showComments]);

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
};

export default Comments;
