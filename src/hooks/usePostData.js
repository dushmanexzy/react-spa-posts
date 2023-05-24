import React from "react";
import axios from "axios";

export function usePostData() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(resp => {
        const data = resp.data;

        setPosts(data)
      })
      .catch(err => console.log(err))
  }, [])


  return [posts]
}
