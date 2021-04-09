import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunkMW from 'redux-thunk'
import { commonR } from "./common/commonR";
import { usersR } from "./users/usersR";
import { commentsR } from "./comments/commentsR";
import { postsR } from "./posts/postsR";

let reducersList = combineReducers({
    common: commonR,
    users: usersR,
    posts: postsR,
    comments: commentsR
})
export type RootState = ReturnType<typeof reducersList>

const composeEnhancers =
    typeof window === 'object' &&
    // @ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        // @ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunkMW)
);
let store = createStore(reducersList, enhancer)
type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
export type ActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>


export default store