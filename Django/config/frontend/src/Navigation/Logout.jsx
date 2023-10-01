import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../api/auth";
import { UserContext } from "../context/userContext";

const Logout = () => {
    const navigate = useNavigate();
    const {user,setUser} = useContext(UserContext);

    const logout = async () => {
        await auth.post('dj-rest-auth/logout/');
        navigate('/');
        setUser(null);
    }

    return (
        <>
            <button onClick={logout}>
                ログアウト
            </button>
        </>
    );
}

export default Logout;