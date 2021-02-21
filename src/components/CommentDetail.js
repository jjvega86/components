import React from "react";

const CommentDetail = () => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={getRandomImage()} />
      </a>
      <div className="content">
        <a href="/" className="author">
          Thomas
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00pm</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
  );
};
