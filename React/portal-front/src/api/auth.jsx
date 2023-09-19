import axios from "axios";

const base_URL = 'http://127.0.0.1:8000/api/v1/';

const acc = localStorage.getItem('accesstoken');
console.log(acc);

const auth = axios.create({
    baseURL: base_URL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${acc}`,
        'withCredentials': true,
    }
})

export default auth;