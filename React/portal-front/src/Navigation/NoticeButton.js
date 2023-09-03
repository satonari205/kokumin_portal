import {Link } from "react-router-dom";

export const NoticeButton = () => {
    return(
        <>
            {/* 通知一覧画面へ遷移 */}
            <Link to="/notices" className="btn rounded-full indicator">
                <p>通知</p>
                <span className="indicator-item badge bg-blue-700"></span>
            </Link>
        </>
    )
};