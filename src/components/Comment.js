import "./Comment.css";
import CommentDate from "./CommentDate";
import CommentUserInfo from "./CommentUserInfo";
import CommentWrapper from "./CommentWrapper";
import CommentWrapper2 from "./CommentWrapper2";

function Comment(props) {
  return (
    <div>
      <CommentWrapper className="comment-first" >
        <CommentUserInfo
          avatarUrl={props.data.author.avatarUrl}
          name={props.data.author.name}
        />

      </CommentWrapper>

      <CommentWrapper2 className="comment-second">
      <div className="Comment-text">{props.data.text}</div>
        <CommentDate date={props.data.date} />
      </CommentWrapper2>
    </div>
  );
}
export default Comment;
