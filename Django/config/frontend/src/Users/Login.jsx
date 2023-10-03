import auth from "../api/auth";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();

    const login = async () => {
<<<<<<< HEAD
        auth.defaults.headers['X-XSRF-TOKEN'] = await auth
        .get('users/csrf/')
        .then(res => {
            console.log(res.data);
            return res.data;
        })
        .catch(e =>{
            console.error(e);
        });
        
=======
>>>>>>> bc07bfb8c55f2533d1cc2c78dc25cda1c52ec0a8
        const response = await auth
        .post('users/jwt/create/',
            {
                username: username,
                password: password,
            },
        ).then(response => {
            const {refresh,access} = response.data;
            console.log(response.data);
<<<<<<< HEAD
=======
            localStorage.setItem('refreshtoken',refresh);
            localStorage.setItem('accesstoken',access);
            navigate('/');
>>>>>>> bc07bfb8c55f2533d1cc2c78dc25cda1c52ec0a8
            window.location.reload();
            navigate('/');
        })
        .catch(error => {
            console.error('Login failed:', error);
            alert(error);
        })
    };

<<<<<<< HEAD
    const fetchCsrfToken = async () => {
    const response = await auth.get('users/csrf/')
        .then(res => {
            console.log(res.data);
            return res.data;
        })
        .catch(e =>{
            console.error(e);
        });
    };

=======
>>>>>>> bc07bfb8c55f2533d1cc2c78dc25cda1c52ec0a8
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