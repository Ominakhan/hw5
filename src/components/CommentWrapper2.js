import React from "react";
import "./CommentWrapper.css";

function CommentWrapper2(props) {
  const classes = props.className + " wrapper2"; //comment-second wrapper
  return <div className={classes}>{props.children}</div>;
}

export default CommentWrapper2;
// 