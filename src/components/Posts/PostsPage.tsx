import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { PostsItem } from "./PostsItem";
import { PostForm } from "./PostForm";
import s from './PostsPage.module.css'
import { setPostsT } from "../../redux/posts/postsT";
import { FetchingComponent } from "../../common/compon/FetchingComponent/FetchingComponent";

export const PostsPage = () => {
    const isFetching = useSelector((state:RootState) => state.common.isFetching)
    const userPostsId = Number(localStorage.getItem("userIdForPosts"))
    const d = useDispatch()
    const posts = useSelector((state:RootState) => state.posts.postsInfo)?.map((postI,index) =>
    <PostsItem postItem={postI} key={index}/>)
    useEffect(() => {
        d(setPostsT(userPostsId))
    },[])

    if (isFetching)
        return <FetchingComponent/>
    return <div>
        <div className={s.pad}>
            <PostForm/>
        </div>
        <h1>Posts</h1>
        <div className={s.postsWrapper}>
            {posts}
        </div>
    </div>
}
