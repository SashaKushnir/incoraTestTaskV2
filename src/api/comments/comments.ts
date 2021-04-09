import { myGetInstance } from "../api";
import { CommentsArrayType } from "../../redux/comments/commentsTypes";

export const comments = {
    getUserPostsAPI : (postId: number) => {
        return myGetInstance.get<CommentsArrayType>(`/comments?postId=${postId}`)
    }
}