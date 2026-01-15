import axios from "axios"

export const api = axios.create({
    // baseURL:API_URL,
    baseURL:  process.env.REACT_APP_BACKEND_API_URL,
    headers:{
        "Content-Type": "application/json",
    }
})