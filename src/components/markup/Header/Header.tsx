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
            <div></div>
            <span className={s.toCenter}>Header</span>
            <div className={s.toRight}>
                <h3 className={s.createPadding} onClick={logOut}>log out</h3>
            </div>
        </div>
    </header>
}