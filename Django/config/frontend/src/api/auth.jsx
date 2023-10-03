import axios from "axios";

const baseURL = 'http://127.0.0.1:8000/api/';

const acc = localStorage.getItem('accesstoken');
if(acc){
    axios.defaults.headers.common['Authorization'] = 'JWT ' + acc;
}

const auth = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default auth;