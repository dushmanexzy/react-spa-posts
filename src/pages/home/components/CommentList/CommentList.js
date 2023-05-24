import React from 'react';
import Spinner from "react-bootstrap/Spinner";
import {useCommentData} from "../../../../hooks/useCommentData";
import {CommentListItem} from "../CommentListItem/CommentListItem";

import "./commentlist.css";

export function CommentList({postId}) {
  const comments = useCommentData(postId);
  const [prepared, setPrepared] = React.useState(false);

  React.useEffect(() => {
    if (comments[0].length) setPrepared(true);
  }, [comments])


  return (
    <div className={`comments-list`}>
      {prepared ?
        <>
          <h3 className={`comments-list-title`}>Комментарии:</h3>
          {comments[0].map(comment => (
            <CommentListItem key={comment.id} comment={comment}/>
          ))}
        </> :
        <Spinner animation={'border'}>
          <span className={'visually-hidden'}>Loading...</span>
        </Spinner>
      }
    </div>
)}
