import { Dispatch } from "redux";
import { ActionsTypes } from "../store";
import { postsA } from "./postsA";
import { commonA } from "../common/commonA";
import { posts } from "../../api/posts/posts";

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