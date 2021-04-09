import { CommentsArrayType } from "./commentsTypes";

export const commentsA = {
    setComments: (commentsArr: CommentsArrayType) => ({type: "SET_POSTS_ARRAY", commentsArr}) as const
}