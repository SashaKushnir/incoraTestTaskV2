import { PostsArrayType } from "./postsTypes";
import { ReturnNewPostType } from "../../api/posts/posts";

export const postsA = {
    setPosts: (postsArr: PostsArrayType) => ({type: "SET_POSTS_ARRAY", postsArr}) as const,
    addPostItem: (newPostItem: ReturnNewPostType) => ({type: "ADD_NEW_POST_ITEM", newPostItem}) as const,
    deletePost:(postId: number) => ({type: "DELETE_POST_BY_ID", postId}) as const
}