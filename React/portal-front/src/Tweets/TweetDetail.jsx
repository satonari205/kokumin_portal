import { useEffect,useState} from "react";
import { Link } from "react-router-dom";

const TweetDetail = ({tweet}) => {

    return(
        <>
            {/* ツイート詳細表示画面 */}
            <div className="avatar flex justify-start w-1/2 m-2">
                    <span className="w-10 h-10">
                        {/* <img className="rounded" src={tweet.user.image || "/images/default.jpg"} alt="userimg" /> */}
                        <img className="rounded" src={"/images/default.jpg"} alt="userimg" />
                    </span>
                    <Link to={`/user/${user.id}`} className="leading-10 pl-3 w-1/2 hover:underline">
                        <p className="hover:link">{user.username}</p>
                    </Link>
                </div>
                <div className="p-4">
                    {tweet.content && !tweet.image && (
                    <a className="pt-4 pb-4">
                        {tweet.content}
                    </a>
                    )}
                    {!tweet.content && tweet.image && (
                        <a className="pt-4 pb-4">
                        <img src={tweet.image} alt="tweet.image" />
                    </a>
                    )}
                    {tweet.content && tweet.image && (
                        <a className="pt-4 pb-4">
                        {tweet.content}
                        <img src={tweet.image} alt="tweet.image" />
                    </a>
                    )}
                </div>
                {/* {formattedDate} */}
                <span>
                    投稿日時: {tweet.posted_at}
                </span>
        </>
    )
};

export default TweetDetail;