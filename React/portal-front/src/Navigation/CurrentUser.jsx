import axios from "axios";
import { useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { UserContext } from "../context/userContext";

const CurrentUser = () => {
  const { user,setUser } = useContext(UserContext);

  const baseURL = 'http://127.0.0.1:8000/api/';

    useEffect(()=>{
        async function currentUser () {
            await axios.get(baseURL + 'users/current/',{
				headers:{
					'Content-Type': 'application/json',
				},
				withCredentials: true,
            })
            .then(res => {
                setUser(res.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
        currentUser();
    },[])

    return(
      <>
        {user
          ?
            <>
              <li>
                <Link to={`users/${user.id}`}>
                  <span className="link link-warning">
                    {user.nickname}
                  </span>
                  さん
                </Link>
              </li>
              <li>
                <Logout setUser={setUser}/>
              </li>
            </>
          :
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
          }
      </>
    );
}

export default CurrentUser;