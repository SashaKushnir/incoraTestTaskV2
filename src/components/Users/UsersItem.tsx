import React from 'react'
import { CompanyType, UserType } from "../../redux/users/usersTypes";
import { ObjectKeysC } from "../../common/compon/ObjectKeys/ObjectKeysC";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { setPostsT } from "../../redux/posts/postsT";
import s from "./UserItems.module.css";

interface UserItemProps {
    userItem: UserType
}

export const UsersItem: React.FC<UserItemProps> = ({userItem}) => {
    const history = useHistory()
    const d = useDispatch()
    const company = (Object.keys(userItem.company) as Array<keyof CompanyType>).map((keyV, index) =>
        <ObjectKeysC value={userItem.company[keyV]} keyValue={keyV} key={index}/>)

    const showUserPosts = () => {
        d(setPostsT(userItem.id))
        localStorage.setItem("userIdForPosts", String(userItem.id))
        history.push("/content/posts")
    }

    return <div className={s.user}>
        <div className={s.name}>{userItem.name}</div>
        <div className={s.username}>{userItem.username}</div>
        <div className={s.phone}>{userItem.phone}</div>
        <div className={s.email}>{userItem.email}</div>
        <div className={s.street}>{userItem.street}</div>
        <div className={s.suite}>{userItem.suite}</div>
        <div className={s.website}>{userItem.website}</div>
        <div className={s.zipcode}>{userItem.zipcode}</div>
        <div className={s.address}>
            <p className={s.address_text}>Address:</p>
            <div className={s.data}>
                <ul>
                    {userItem.address.city ? <li>{userItem.address.city}</li> : null}
                    {userItem.address.geo.lat ? <li>{userItem.address.geo.lat}</li> : null}
                    {userItem.address.geo.lng ? <li>{userItem.address.geo.lng}</li> : null}
                    {userItem.address.lat ? <li>{userItem.address.lat}</li> : null}
                    {userItem.address.lng ? <li>{userItem.address.lng}</li> : null}
                </ul>
            </div>
        </div>

        <div className={s.company}>
            <p className={s.company_text}>Company</p>
            <div>
                {company}
            </div>
        </div>
        <NavLink to={"/content/posts"} className={s.nav}>
            <button className={s.button} onClick={showUserPosts}>Show</button>
        </NavLink>
    </div>
}
