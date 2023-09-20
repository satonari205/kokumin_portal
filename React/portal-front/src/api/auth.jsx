import axios from "axios";

const base_URL = 'http://127.0.0.1:8000/api/v1/';

let headers = {
    'Content-Type': 'application/json',
    'withCredentials': true,
}

const acc = localStorage.getItem('accesstoken');

if(acc){
    headers['Authorization'] = 'JWT ' + acc;
}

console.log(acc);

const auth = axios.create({
    baseURL: base_URL,
    headers: headers,
})

export {auth,headers};