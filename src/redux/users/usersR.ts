import { ActionsTypes } from "../store";
import { usersA } from "./usersA";
import { UsersArrayType } from "./usersTypes";

interface InitialUsersType {
   usersInfo?: UsersArrayType
}

const initialUsersState: InitialUsersType = {
}

export const usersR = (users = initialUsersState, action: ActionsTypes<typeof usersA>): InitialUsersType => {
    switch (action.type) {
        case "SET_USERS_INFO":
            return {
                ...users,
                usersInfo: action.usersInfo
            }
        default:
            return users
    }
}