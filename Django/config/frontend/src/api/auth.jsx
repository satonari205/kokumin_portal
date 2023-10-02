import axios from "axios";

const baseURL = 'http://127.0.0.1:8000/api/';

axios.defaults.xsrfCookieName = 'csrftoken';
// axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const auth = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default auth;