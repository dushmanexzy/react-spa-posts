import React from 'react';
import {PostsList} from "./components";
import {PostContextProvider} from "../../context/PostContext";
import {CommentContextProvider} from "../../context/CommentContext";

export function Home() {

  return (
    <PostContextProvider>
      <CommentContextProvider>
        <h1 className={`main-title`}>Список комментариев</h1>

        <PostsList/>
      </CommentContextProvider>
    </PostContextProvider>
  );
}
