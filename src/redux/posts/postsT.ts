import { Dispatch } from "redux";
import { ActionsTypes } from "../store";
import { postsA } from "./postsA";
import { commonA } from "../common/commonA";
import { posts } from "../../api/posts/posts";
import { PostFormType } from "../../components/Posts/PostForm";

export const setPostsT = (userId: number) => async (d: Dispatch<ActionsTypes<typeof postsA | typeof commonA>>) => {
    try {
        d(commonA.fetchingToggle(true))
        let res = await posts.getUserPostsAPI(userId)
        if (res.statusText === ""){
           d(postsA.setPosts(res.data))
        } else {

        }
        d(commonA.fetchingToggle(false))
    } catch (error) {
        alert(error.message)
        d(commonA.fetchingToggle(false))
    }
}

export const postNewPost = (newPostItem: PostFormType) => async (d: Dispatch<ActionsTypes<typeof postsA | typeof commonA>>) => {
    try {
        d(commonA.fetchingToggle(true))
        let res = await posts.postUserPostsAPI(newPostItem)
        console.log(res)
        if (res.statusText === ""){
            d(postsA.addPostItem(res.data))
        } else {

        }
        d(commonA.fetchingToggle(false))
    } catch (error) {
        alert(error.message)
        d(commonA.fetchingToggle(false))
    }
}

export const deletePost = (postId: number) => async (d: Dispatch<ActionsTypes<typeof postsA | typeof commonA>>) => {
    try {
        d(commonA.fetchingToggle(true))
        let res = await posts.deleteUserPostsAPI(postId)
        console.log(res)
        if (res.statusText === ""){
            d(postsA.deletePost(postId))
        } else {

        }
        d(commonA.fetchingToggle(false))
    } catch (error) {
        alert(error.message)
        d(commonA.fetchingToggle(false))
    }
}