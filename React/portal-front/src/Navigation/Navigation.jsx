import {NoticeButton} from "./NoticeButton";
import NaviList from "./NaviList";

export const Navigation = () => {

    return (
        <>
            <div className="navbar py-0 border-b-2 sticky top-0 p-4 z-30 border-gray-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <NaviList />
                    </ul>
                    </div>
                    <a href="/" className="btn btn-ghost normal-case text-lg">こくみんポータル(仮)</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 tabs">
                        <li className="tab"><a>掲示板(仮)</a></li>
                        <li className="tab tab-active"><a>グループチャット(未実装)</a></li>
                        <li className="tab"><a href="/magazine">マガジン(仮)</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <NoticeButton />
                </div>
            </div>
            <div className="bg-white opacity-95 fixed top-0 h-16 w-screen z-10"></div>
        </>
    )
};