import React, { ReactChild } from 'react'
import { AddressType, CompanyType, UserType } from "../../redux/users/usersTypes";
import { ObjectKeysC } from "../../common/compon/ObjectKeys/ObjectKeysC";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { PostItemType } from "../../redux/posts/postsTypes";
import { setPostsT } from "../../redux/posts/postsT";
import { setCommentsT } from "../../redux/comments/commentsT";

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
    return <div>
        <div><b>Title: </b>{postItem.title}</div>
        <div><b>Body: </b>{postItem.body}</div>
        <button onClick={showComments}>Show comments</button>
    </div>
}
