import { Dispatch } from "redux";
import { ActionsTypes } from "../store";
import { usersA } from "./usersA";
import { commonA } from "../common/commonA";
import { users } from "../../api/users/users";

export const setUsersT = () => async (d: Dispatch<ActionsTypes<typeof usersA | typeof commonA>>) => {
    try {
        d(commonA.fetchingToggle(true))
        let response = await users.getUsersAPI()
        console.log(response)
        if (response.statusText === ""){
            d(usersA.setUsers(response.data))
            d(commonA.fetchingToggle(false))
        }
    } catch (error) {
        alert(error.message)
        d(commonA.fetchingToggle(false))
    }
}