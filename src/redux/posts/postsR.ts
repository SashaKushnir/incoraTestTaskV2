import { ActionsTypes } from "../store";
import { postsA } from "./postsA";
import { PostsArrayType } from "./postsTypes";

interface InitialPostsType {
   postsInfo?: PostsArrayType
}

const initialUsersState: InitialPostsType = {
}

export const postsR = (posts = initialUsersState, action: ActionsTypes<typeof postsA>): InitialPostsType => {
    switch (action.type) {
        case "SET_POSTS_ARRAY":
            return {
                ...posts,
                postsInfo: action.postsArr
            }
        default:
            return posts
    }
}