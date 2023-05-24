import React from "react";
import axios from "axios";

export function useCommentData(postId) {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    setTimeout(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(resp => {
          const data = resp.data;

          setComments(data)
        })
        .catch(err => console.log(err))
    }, 500)
  }, [postId])

  return [comments]
}
