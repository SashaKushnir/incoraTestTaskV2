import React from 'react'
import s from './Header.module.css'
import { useDispatch } from "react-redux";
import { commonA } from "../../../redux/common/commonA";

export const Header = ( ) => {
    const d = useDispatch()
    const logOut = () => {
        d(commonA.authToggle(false))
        localStorage.removeItem("isAuth")
    }

    return <header>
        <div className={s.headerWrapper}>
            Header
            <div className={s.toRight} onClick={logOut}>log out</div>
        </div>
    </header>
}