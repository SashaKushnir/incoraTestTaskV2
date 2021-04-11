import React from 'react'
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { CommentsItem } from "./CommentsItem";
import { FetchingComponent } from "../../common/compon/FetchingComponent/FetchingComponent";

export const CommentsPage = () => {
    const comments = useSelector((state: RootState) => state.comments.commentsInfo)
        ?.map((comment, index) =>
            <CommentsItem commentItem={comment} key={index}/>
        )
    const isFetching = useSelector((state: RootState) => state.common.isFetching)

    if (isFetching)
        return <FetchingComponent/>

    return <div>
        Comments
        {comments}
    </div>
}
