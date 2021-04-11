import { myGetInstance } from "../api";
import { PostsArrayType } from "../../redux/posts/postsTypes";
import { PostFormType } from "../../components/Posts/PostForm";



export const posts = {
    getUserPostsAPI : (userID: number) => {
        return myGetInstance.get<PostsArrayType>(`/posts?userId=${userID}`)
    },
    postUserPostsAPI : (formObj: PostFormType) => {
        return myGetInstance.post<ReturnNewPostType>(`/comments`,formObj)
    },
    // putUserPostsAPI : (num: number, newPostObj) => {
    //     return myGetInstance.put(`/comments/${num}`, newPostObj)
    // },
    deleteUserPostsAPI : (num: number) => {
        return myGetInstance.delete(`posts/${num}`)
    },
}

export interface ReturnNewPostType extends PostFormType {
    id: number
}