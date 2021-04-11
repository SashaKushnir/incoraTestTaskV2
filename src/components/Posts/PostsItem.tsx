import React from 'react'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { PostItemType } from "../../redux/posts/postsTypes";
import { setCommentsT } from "../../redux/comments/commentsT";
import { IconLabelButtons } from "../../common/compon/Material/MyButton";
import { deletePost } from "../../redux/posts/postsT";
import { ShowCommetnsButton } from "../../common/compon/Material/ShowEditButton";
import s from './PostForm.module.css'

interface PostsItemProps {
    postItem: PostItemType
}

export const PostsItem: React.FC<PostsItemProps> = ({postItem}) => {
    const history = useHistory()
    const d = useDispatch()
    const showComments = () => {
        d(setCommentsT(postItem.id))
        history.push('/content/comments')
    }
    const deleteItem = () => {
        d(deletePost(postItem.id))
    }
    return <div>
        <div><b>Title: </b>{postItem.title}</div>
        <div><b>Body: </b>{postItem.body}</div>
        <div className={s.buttonWrap}>
            <span onClick={showComments}><ShowCommetnsButton/></span>
            <span onClick={deleteItem}><IconLabelButtons/></span>
        </div>
    </div>
}
