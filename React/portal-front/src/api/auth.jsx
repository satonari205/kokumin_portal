import axios from "axios";

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/';
axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/json';

const acc = localStorage.getItem('accesstoken');

let headers = {}

if(acc){
    headers += {
        'Autholization': `JWT ${acc}`,
    }
}

console.log(headers);
debugger

const auth = axios.create({
    headers: headers,
});

export default auth;