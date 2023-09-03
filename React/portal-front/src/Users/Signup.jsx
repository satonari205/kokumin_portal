export const Signup = () => {
    return(
        <div className="max-w-xl mt-10 ml-auto mr-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">ユーザー登録</h1>
                <p className="py-6">
                    登録してログインすると投稿機能が使えるようになります。
                </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Username</span>
                    </label>
                    <input type="text" placeholder="5~100文字で入力して下さい" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Nickname</span>
                    </label>
                    <input type="text" placeholder="最大100文字まで入力できます" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="text" placeholder="8~100文字で入力して下さい" className="input input-bordered" />
                    <label className="label">
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-blue-700btn-lg hover:bg-blue-500 bg-blue-700 text-white">登録して始める</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};