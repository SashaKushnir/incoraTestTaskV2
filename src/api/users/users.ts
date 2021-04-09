
import { myGetInstance } from "../api";
import { UsersArrayType } from "../../redux/users/usersTypes";

export const users = {
    getUsersAPI : () => {
        return myGetInstance.get<UsersArrayType>(`/users`)
    }
}