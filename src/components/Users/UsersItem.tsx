import React from 'react'
import { CompanyType, UserType } from "../../redux/users/usersTypes";
import { ObjectKeysC } from "../../common/compon/ObjectKeys/ObjectKeysC";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { setPostsT } from "../../redux/posts/postsT";

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
        history.push("")
    }

    return <div>
        <div>{userItem.email}</div>
        <div>{userItem.name}</div>
        <div>{userItem.phone}</div>
        <div>{userItem.street}</div>
        <div>{userItem.suite}</div>
        <div>{userItem.username}</div>
        <div>{userItem.website}</div>
        <div>{userItem.zipcode}</div>
        <div>
            Address:
            <div>
                {userItem.address.city}
                {userItem.address.geo.lat}
                {userItem.address.geo.lng}
                {userItem.address.lat}
                {userItem.address.lng}
            </div>
        </div>

        <div><b>Company: </b>
            <div>
                {company}
            </div>
        </div>
        <NavLink to={"/content/posts"}>
            <button onClick={showUserPosts}>Show</button>
        </NavLink>
    </div>
}
