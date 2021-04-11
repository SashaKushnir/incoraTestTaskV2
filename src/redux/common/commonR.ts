import { ActionsTypes } from "../store";
import { commonA } from "./commonA";

interface InitialCommonType {
    isFetching: boolean,
    isAuth: boolean | null,
    authErrorMessage?: string
    randomUserId?: number
}

const initialCommonState: InitialCommonType = {
    isFetching: false,
    isAuth: null
}

export const commonR = (common = initialCommonState, action: ActionsTypes<typeof commonA>): InitialCommonType => {
    switch (action.type) {
        case "SET_FETCHING_STATUS":
            return {
                ...common,
                isFetching: action.fetchingStatus
            }
        case "SET_RANDOM_USER_ID":
            return {
                ...common,
                randomUserId: action.userId
            }
        case "SET_AUTH_STATUS":
            return {
                ...common,
                isAuth: action.authStatus
            }
        case "SET_ERROR_MESSAGE":
            return {
                ...common,
                authErrorMessage: action.errorM
            }
        default:
            return common
    }
}