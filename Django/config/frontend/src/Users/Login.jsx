import auth from "../api/auth";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const baseURL = 'http://127.0.0.1:8000/api/';

const Login = () => {
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate();

    const login = async () => {
        fetchCsrfToken();
        const response = await auth
        .post(baseURL + 'dj-rest-auth/login/',
            {
                username: username,
                password: password,
            },
        ).then(response => {
            console.log(response.data);
            navigate('/');
            window.location.reload();
        })
        .catch(error => {
            console.error('Login failed:', error);
            // alert('EmailかPasswordが違います');
            alert(error);
        })
    };

    const fetchCsrfToken = async () => {
    const response = await auth.get('api/csrf/')
        .then(res => {
            console.log(res);
            // return res.json();
        })
        .catch(e =>{
            console.error(e);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    };

    return(
        <div className="max-w-sm mt-5 mx-auto">
            <div>
                <div className="text-center">
                <h1 className="text-2xl font-bold">ログイン</h1>
                <p className="py-6">
                    ログインすると投稿機能が使えるようになります。
                </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form
                className="card-body"
                onSubmit={handleSubmit}
                >
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input
                        placeholder="Username"
                        className="input input-bordered"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        placeholder="password"
                        className="input input-bordered"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="label">
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button
                        className="btn btn-blue-700btn-lg hover:bg-blue-500 bg-blue-700 text-white"
                        type="submit"
                    >
                        ログイン
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;