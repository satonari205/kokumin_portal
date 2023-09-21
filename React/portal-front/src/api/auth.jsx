import axios from "axios";

const base_URL = 'http://127.0.0.1:8000/api/';

const auth = axios.create({
    baseURL: base_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
})

export default auth;