import React, { useState} from "react";
import PostBody from "./PostBody";

export default function PostDetail({posts}) {
    return posts.map((post) => {
      return (
      <div>
        <h5>{post.title}</h5>
        <PostBody post={post} />
      </div>
      )
    })
}