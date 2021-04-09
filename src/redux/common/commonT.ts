import { Dispatch } from "redux";
import { ActionsTypes } from "../store";
import { commonA } from "./commonA";
import { LoginFormType } from "../../components/Authorisation/LoginForm";
import { AxiosResponse } from "axios";

export const loginT = (loginObj:LoginFormType) => async (d: Dispatch<ActionsTypes<typeof commonA>>) => {
    try {
        // Imitating login
        d(commonA.fetchingToggle(true))
        const res: AxiosResponse<{ randomUserId: number }> = {
            data: {
                randomUserId: Math.floor(Math.random() * 10) + 1
            },
            statusText:"Ok",
            status:200,
            config:{},
            headers:{}
        }
            if(res.statusText === "Ok") {
                d(commonA.authToggle(true))
                d(commonA.setRandomUserId(res.data.randomUserId))
            }
            else {
                d(commonA.authToggle(false))
            }
        d(commonA.fetchingToggle(false))
    } catch (e) {
        d(commonA.setErrorMessage(String(e)))
        d(commonA.fetchingToggle(false))
    }
 }