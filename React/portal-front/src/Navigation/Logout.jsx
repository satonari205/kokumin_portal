import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('accesstoken');
        localStorage.removeItem('refreshtoken');
        navigate('/login');
    }

    return (
        <>
            <li>
                <a
                    href="/login"
                    onClick={logout}
                >
                    ログアウト
                </a>
            </li>
        </>
    );
}

export default Logout;