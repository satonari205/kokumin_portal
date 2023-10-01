import {Link} from "react-router-dom"

const NoticeButton = () => {
    return(
        <>
            <Link to="/notices" className="btn btn-sm rounded-lg indicator">
                <p>通知</p>
                <span className="indicator-item badge bg-blue-700"></span>
            </Link>
        </>
    )
};

export default NoticeButton;