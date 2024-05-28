import React, { useState } from "react";

export default function CommentForm({ onSubmitComment, slug }) {
  const [commentText, setCommentText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commentText?.trim()) {
      console.log("commentText:", commentText);
      onSubmitComment(slug, commentText);
      setCommentText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={commentText}
        onChange={(event) => setCommentText(event.target.value)}
        placeholder="Write a comment"
        required
      />
      <button type="submit">Send</button>
    </form>
  );
}
