import React from 'react';

import "./commentlistitem.css";

export function CommentListItem({comment}) {
  return (
    <div className={`comment`}>
      <p className={`comment-email`}>{comment.email}</p>
      <p className={`comment-text`}>{comment.body}</p>
    </div>
  );
}
