import React, { useEffect } from 'react'
import { UsersPage } from "../../Users/UsersPage";
import { Header } from "../Header/Header";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { PostsPage } from "../../Posts/PostsPage";
import { CommentsPage } from "../../Comments/CommentsPage";

export const Content = () => {
    const {url} = useRouteMatch()
    return <div>
        <Header/>
        <Switch>
            <Redirect exact from={url} to={`${url}/users`}/>
            <Route path={`${url}/users`} render={() => <UsersPage/>}/>
            <Route path={`${url}/posts`} render={() => <PostsPage/>}/>
            <Route path={`${url}/comments`} render={() => <CommentsPage/>}/>
        </Switch>

    </div>
}

