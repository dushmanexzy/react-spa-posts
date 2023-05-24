import React from 'react';
import {PostsList} from "./components";
import {PostContextProvider} from "../context/PostContext";

export function Home() {

  return (
    <PostContextProvider>
      <h1 className={`main-title`}>Список комментариев</h1>

      <PostsList />
    </PostContextProvider>
  );
}
