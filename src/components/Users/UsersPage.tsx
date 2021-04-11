import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setUsersT } from "../../redux/users/usersT";
import { RootState } from "../../redux/store";
import { UsersItem } from "./UsersItem";
import { FetchingComponent } from "../../common/compon/FetchingComponent/FetchingComponent";
import s from './UserPage.module.css'

export const UsersPage = () => {
    const d = useDispatch()
    const usersInfo = useSelector((state: RootState) => state.users.usersInfo)
    const usersToJSX = usersInfo?.map((userItem, index) => <UsersItem userItem={userItem} key={index}/>)
    const isFetching = useSelector((state:RootState) => state.common.isFetching)
    useEffect(() => {
        d(setUsersT())
    },[])


    if (isFetching)
        return <FetchingComponent/>

    return <div className={s.wrap}>
        {usersToJSX}
    </div>
}
