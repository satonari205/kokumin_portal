import CurrentUser from './CurrentUser';
import { Link } from "react-router-dom";

const NaviList = () => {
    return(
        <>
            <li>
                <Link to={"/"}>ホーム(仮)</Link>
            </li>
            <li>
                <Link to={"/magazines"}>マガジン(仮)</Link>
            </li>
            <CurrentUser />
        </>
    );
}

export default NaviList;