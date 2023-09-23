import { useNavigate } from "react-router-dom";
import {auth,headers} from "../api/auth";

const Logout = () => {
    const navigate = useNavigate();
    const content = localStorage.getItem('accesstoken');

    const logout = async () => {
        await auth.post('dj-rest-auth/logout/',{
            content: content,
        });
        localStorage.removeItem('accesstoken');
        localStorage.removeItem('refreshtoken');
        localStorage.removeItem('user_id');
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