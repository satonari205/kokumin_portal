export const Login = () => {
    return(
        <div className="max-w-xl mt-10 ml-auto mr-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">ログイン</h1>
                <p className="py-6">
                    ログインすると投稿機能が使えるようになります。
                </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Username" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="password" className="input input-bordered" />
                    <label className="label">
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-blue-700btn-lg hover:bg-blue-500 bg-blue-700 text-white">ログイン</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};