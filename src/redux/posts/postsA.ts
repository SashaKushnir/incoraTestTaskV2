import { PostsArrayType } from "./postsTypes";

export const postsA = {
    setPosts: (postsArr: PostsArrayType) => ({type: "SET_POSTS_ARRAY", postsArr}) as const
}