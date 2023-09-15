import userApi from "../api/user";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export const Signup = () => {
    const [username, setUsername] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    
    const handleLogin = () => {
        userApi.register(username,nickname,password);
        localStorage.setItem('token', 'user_token');
        navigate('/');
    };

    return(
        <div className="max-w-sm mx-auto">
            <div className="m-4">
                <div className="text-center">
                <h1 className="text-2xl font-bold">ユーザー登録</h1>
                <p className="py-6">
                    登録してログインすると投稿機能が使えるようになります。
                </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input
                        type="text"
                        placeholder="5~100文字で入力して下さい"
                        className="input input-bordered"
                        value={username}
                        onChange={(e)=>{setUsername(e.target.value)}}
                        />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Nickname</span>
                    </label>
                    <input
                        type="text"
                        placeholder="最大100文字まで入力できます"
                        className="input input-bordered"
                        value={nickname}
                        onChange={(e)=>{setNickname(e.target.value)}}
                        />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="text"
                        placeholder="8~100文字で入力して下さい"
                        className="input input-bordered"
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    <label className="label">
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button
                        className="btn btn-blue-700btn-lg hover:bg-blue-500 bg-blue-700 text-white"
                        onClick={handleLogin}
                    >
                        登録して始める
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};