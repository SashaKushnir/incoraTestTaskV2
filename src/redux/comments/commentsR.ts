import { ActionsTypes } from "../store";
import { commentsA } from "./commentsA";
import { CommentsArrayType } from "./commentsTypes";

interface InitialCommentsType {
   commentsInfo?: CommentsArrayType
}

const initialCommentsState: InitialCommentsType = {}

export const commentsR = (comments = initialCommentsState, action: ActionsTypes<typeof commentsA>): InitialCommentsType => {
    switch (action.type) {
        case "SET_POSTS_ARRAY":
            return {
                ...comments,
                commentsInfo: action.commentsArr
            }
        default:
            return comments
    }
}