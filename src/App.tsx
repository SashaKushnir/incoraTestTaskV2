import React, { useEffect } from 'react';
import './App.css';
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import { Authorisation } from "./components/Authorisation/Authorisation";
import { Content } from "./components/markup/Content/Content";

const App = () => {
    const isAuth = useSelector((state: RootState) => state.common.isAuth)
    const history = useHistory()

    useEffect(() => {
        if (isAuth) {
            localStorage.setItem("isAuth", "true")
            history.push("/")
        } else
            history.push("/login")
    }, [isAuth])

    return (
        <div className="App">
            <Switch>
                <Redirect exact from={'/'} to={'/content'}/>
                <Route path={'/content'} render={() => <Content/>}/>
                <Route path={'/login'} render={() => <Authorisation/>}/>
                <Route path={'*'} render={() => <div>Empty Link</div>}/>
            </Switch>
        </div>
    );
}

export default App;
