import { myGetInstance } from "../api";
import { PostsArrayType } from "../../redux/posts/postsTypes";



export const posts = {
    getUserPostsAPI : (userID: number) => {
        return myGetInstance.get<PostsArrayType>(`/posts?userId=${userID}`)
    },
    // postUserPostsAPI : (formObj) => {
    //     return myGetInstance.post(`/comments`,formObj)
    // },
    // putUserPostsAPI : (num: number, newPostObj) => {
    //     return myGetInstance.put(`/comments/${num}`, newPostObj)
    // },
    deleteUserPostsAPI : (num: number) => {
        return myGetInstance.delete(`posts/${num}`)
    },
}