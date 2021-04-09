import React from 'react'
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { PostsItem } from "./PostsItem";

export const PostsPage = () => {
    const posts = useSelector((state:RootState) => state.posts.postsInfo)?.map((postI,index) =>
    <PostsItem postItem={postI} key={index}/>)
    return <div>
        Posts:
        {posts}
    </div>
}
