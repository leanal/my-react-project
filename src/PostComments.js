import React, {useEffect, useState} from "react"

export default function PostComments({postId}){
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        async function loadComments(){
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            const commentsFromApi = await response.json()
            setComments(commentsFromApi)
        }
        loadComments()
    }, [postId])
    
    return (
        <div>
            <h5>Comments</h5>
            {comments.map((comment) => <p>{comment.body}</p>)}
        </div>
    )
}