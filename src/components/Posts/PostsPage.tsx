import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { PostsItem } from "./PostsItem";
import { PostForm } from "./PostForm";
import s from './PostsPage.module.css'
import { setPostsT } from "../../redux/posts/postsT";

export const PostsPage = () => {
    const userPostsId = Number(localStorage.getItem("userIdForPosts"))
    const d = useDispatch()
    const posts = useSelector((state:RootState) => state.posts.postsInfo)?.map((postI,index) =>
    <PostsItem postItem={postI} key={index}/>)
    useEffect(() => {
        d(setPostsT(userPostsId))
    },[])
    return <div>
        <div className={s.pad}>
            <PostForm/>
        </div>
        Posts:
        {posts}
    </div>
}
