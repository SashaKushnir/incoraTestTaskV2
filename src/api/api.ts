import axios from "axios";

const BaseUrl = "https://jsonplaceholder.typicode.com"

export const myGetInstance = axios.create({
    baseURL: BaseUrl
})



