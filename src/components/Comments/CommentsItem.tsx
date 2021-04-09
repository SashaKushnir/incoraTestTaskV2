import React from 'react'
import { CommentType } from "../../redux/comments/commentsTypes";

interface CommentsItemProps {
    commentItem: CommentType
}

export const CommentsItem: React.FC<CommentsItemProps> = ({commentItem}) => {
    return <div>
        <div><b>Body: </b>{commentItem.body}</div>
        <div><b>Email: </b>{commentItem.email}</div>
        <div><b>Name: </b>{commentItem.name}</div>
    </div>
}
