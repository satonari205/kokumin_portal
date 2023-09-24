import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";

const CurrentUser = () => {
    const [user,setUser] = useState();

    const baseURL = 'http://127.0.0.1:8000/api/';

    useEffect(()=>{
        async function currentUser () {
            await axios.get(baseURL + 'users/current/')
            .then(res => {
                console.log(res.data);
                setUser(res.data)
            })
            .catch(error => {
                console.log(error);
            });
        }
        currentUser();
    },[])

    return(
        <>
            {user && (
        <li>
          <Link to={`users/${user.id}`}>
            <span className="link link-warning">
                {user.nickname} 
            </span>
            さん
          </Link>
        </li>
      )}
      {user ? (
        <li>
          <Logout />
        </li>
      ) : (
        <>
          <li>
            <Link to={"/login"}>
              ログイン
            </Link>
          </li>
          <li>
            <Link to={"/register"}>
              ユーザー登録
            </Link>
          </li>
        </>
      )}
        </>
    );
}

export default CurrentUser;