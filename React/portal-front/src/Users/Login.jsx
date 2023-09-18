import axios from "axios";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

const ENDPOINT_URL = 'http://127.0.0.1:8000/api/v1/'

export const Login = () => {
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate();
    const [cookie,setCookie] = useCookies();

    // JWTでのユーザー認証
    // 1.auth/token/jwt/create/でaccessTokenを発行
    // 2.auth/token/users/me/にaccessTokenを渡してユーザー情報を取得
    // 3.アクセストークンをuseCookieにしまってグローバルに管理
    // 4.ログアウト時はrefreshTokenで消しこむ
    const getJwt = async (data) => {
        console.log(data);
        await axios.post(ENDPOINT_URL + 'auth/token/jwt/create/',
        {
            username: data.username,
            password: data.password,
        })
        .then(function(response){
            console.log(response.data.access)
            setCookie('accesstoken', response.data.access, { path: '/' }, { httpOnly: true });
            setCookie('refreshtoken', response.data.refresh, { path: '/' }, { httpOnly: true });
            navigate('/');
        })
    }

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
                onSubmit={handleSubmit(getJwt)}
                >
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input
                        placeholder="Username"
                        className="input input-bordered"
                        onChange={() => setUsername(e.target.value)}
                    />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        placeholder="password"
                        className="input input-bordered"
                        onChange={() => setPassword(e.target.value)}
                    />
                    <label className="label">
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button
                        className="btn btn-blue-700btn-lg hover:bg-blue-500 bg-blue-700 text-white"
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