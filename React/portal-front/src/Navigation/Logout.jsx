import { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../api/auth";

const Logout = () => {
    const navigate = useNavigate();

    const logout = async () => {
        await auth.post('dj-rest-auth/logout/');
        navigate('/');
    }

    return (
        <>
            <li>
                <button onClick={logout}>
                    ログアウト
                </button>
            </li>
        </>
    );
}

export default Logout;