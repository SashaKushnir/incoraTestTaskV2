import React from 'react'
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { CommentsItem } from "./CommentsItem";

export const CommentsPage = () => {
    const comments = useSelector((state:RootState) => state.comments.commentsInfo)
        ?.map((comment, index)=>
            <CommentsItem commentItem={comment} key={index} />
    )
    return <div>
        Comments
        {comments}
    </div>
}
