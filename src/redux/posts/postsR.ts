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
        case "ADD_NEW_POST_ITEM":
            return {
                ...posts,
                postsInfo: posts.postsInfo?[...posts.postsInfo,
                    action.newPostItem
                ]: [action.newPostItem]
            }
        case "DELETE_POST_BY_ID":
            return {
                ...posts,
                postsInfo: posts.postsInfo
                    ?[...posts.postsInfo.filter((obj)=> obj.id!==action.postId)]
                    : undefined
            }
        default:
            return posts
    }
}