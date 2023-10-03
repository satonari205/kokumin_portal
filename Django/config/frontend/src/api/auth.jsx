import axios from "axios";

const baseURL = 'http://127.0.0.1:8000/api/';

axios.defaults.headers.common['X-CSRFToken'] = 'csrftoken';

const auth = axios.create({
    baseURL: baseURL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default auth;