import axios from "axios";

const baseURL = 'http://127.0.0.1:8000/api/';

let headers = {
    'Content-Type': 'application/json',
}

const acc = localStorage.getItem('accesstoken');
console.log(acc);
if(acc){
    headers += {
        'Autholization': `JWT ${acc}`,
    }
}

const auth = axios.create({
    baseURL: baseURL,
    headers: headers,
    withCredentials: true,
});

export {auth,headers};