import React from 'react';
import {usePostData} from "../hooks/usePostData";

export const postContext = React.createContext([]);

export function PostContextProvider({children}) {
  const [data] = usePostData();

  return (
    <postContext.Provider value={data}>
      {children}
    </postContext.Provider>
  );
}
