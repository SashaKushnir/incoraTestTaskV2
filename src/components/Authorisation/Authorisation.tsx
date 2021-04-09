import React, { useEffect } from 'react'
import { LoginForm } from "./LoginForm";
import s from './Authorisation.module.css'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FetchingComponent } from "../../common/compon/FetchingComponent/FetchingComponent";
import { useHistory } from "react-router-dom";
import { commonA } from "../../redux/common/commonA";

export const Authorisation = () => {
    const isFetching = useSelector((state:RootState) => state.common.isFetching)
    const isAuthFromStorage = localStorage.getItem("isAuth")
    const history = useHistory()
    const d = useDispatch()
    useEffect(() => {
        if(isAuthFromStorage) {
            d(commonA.authToggle(true))
            history.push('/content')
        }
    },[isAuthFromStorage])

    if(isFetching)
        return <FetchingComponent/>

        return <div className={s.wrap}>
            <h1 className={s.headerText}>Log in</h1>
            <LoginForm/>
        </div>
}

