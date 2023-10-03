import axios from "axios";

const baseURL = 'http://127.0.0.1:8000/api/';

<<<<<<< HEAD
axios.defaults.headers.common['X-CSRFToken'] = 'csrftoken';
=======
const acc = localStorage.getItem('accesstoken');
if(acc){
    axios.defaults.headers.common['Authorization'] = 'JWT ' + acc;
}
>>>>>>> bc07bfb8c55f2533d1cc2c78dc25cda1c52ec0a8

const auth = axios.create({
    baseURL: baseURL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default auth;