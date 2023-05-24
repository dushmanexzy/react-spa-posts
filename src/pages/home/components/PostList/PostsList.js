import React from 'react';
import {postContext} from "../../../../context/PostContext";
import {ListGroup} from "react-bootstrap";
import {PostListItem} from "../PostListItem/PostListItem";

import './postlist.css';

export function PostsList() {
  const posts = React.useContext(postContext);

  return (
    <div className={`post-list-container`}>
      <ListGroup className={`post-list`}>
        {posts.length && posts.map(post => (
          <PostListItem key={post.title} post={post} />
        ))}
      </ListGroup>
    </div>
  );
}
