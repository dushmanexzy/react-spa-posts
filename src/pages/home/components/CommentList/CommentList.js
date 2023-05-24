import React from 'react';
import {useCommentData} from "../../../../hooks/useCommentData";
import {CommentListItem} from "../CommentListItem/CommentListItem";

import "./commentlist.css";

export function CommentList({postId}) {
  const comments = useCommentData(postId);

  return (
    <div className={`comments-list`}>
      <h3 className={`comments-list-title`}>Комментарии:</h3>
      {comments[0].map(comment => (
        <CommentListItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
