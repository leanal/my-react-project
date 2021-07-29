import React, {useState} from "react";
import PostComments from "./PostComments"

export default function PostBody({post}) {
    const [comment, setComment ] = useState(false);
    const clickHandler = () => setComment(!comment)
    
  return(<>
    <p onClick={clickHandler}>{post.body}</p>
    {comment && <PostComments postId={post.id}/>}
  </>)
}