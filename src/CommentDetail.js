import React from "react";
const CommentDetail = (props) => {

    const author = props.author;
    const time = props.time;
    const text=props.text;
    const imageSrc = props.imageSrc;
    return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={imageSrc} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {author}
        </a>
        <div className="metadata">
          <span className="date">{time}</span>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
