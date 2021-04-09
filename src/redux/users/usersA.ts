import { UsersArrayType } from "./usersTypes";

export const usersA = {
    setUsers: (usersInfo: UsersArrayType) => ({type: "SET_USERS_INFO", usersInfo})
}