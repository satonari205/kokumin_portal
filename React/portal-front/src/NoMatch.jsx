import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NoMatch = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            navigate('/');
        },2000);
        return () => clearTimeout(timeoutId);
    },[])

    return <h2 className="text-center p-10">2秒後にホームに遷移します。</h2>;
}
