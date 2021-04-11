import { Dispatch } from "redux";
import { ActionsTypes } from "../store";
import { commentsA } from "./commentsA";
import { commonA } from "../common/commonA";
import { comments } from "../../api/comments/comments";

export const setCommentsT = (postId: number) => async (d: Dispatch<ActionsTypes<typeof commentsA | typeof commonA>>) => {
    try {
        d(commonA.fetchingToggle(true))
        let res = await comments.getUserPostsAPI(postId)
        console.log(res)
        if (res.statusText === "") {
            d(commentsA.setComments(res.data))
        } else {

        }
        d(commonA.fetchingToggle(false))
    } catch (error) {
        alert(error.message)
        d(commonA.fetchingToggle(false))
    }
}