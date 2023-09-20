import {auth} from "../api/auth";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

export const Login = () => {
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate();
    const [cookie,setCookie] = useCookies('');

    const login = async () => {
        console.log(username);
        const response = await auth
        .post('auth/token/jwt/create/',
            {
                username: username,
                password: password,
            },
        ).then(response => {
            console.log(response.data);
            const { refresh, access } = response.data;
            console.log('Refresh Token:', refresh);
            console.log('Access Token:', access);
            localStorage.setItem('accesstoken',access);
            localStorage.setItem('refreshtoken',refresh);
            setCookie(
                'refreshtoken',
                refresh,
                { httpOnly: true }
            );
            setCookie(
                'accesstoken',
                access,
                { httpOnly: true }
            );
            navigate('/');
        })
        .catch(error => {
            console.error('Login failed:', error);
            alert('EmailかPasswordが違います');
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCookie('test',username);
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