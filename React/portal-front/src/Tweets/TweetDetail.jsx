import { useEffect,useState} from "react";
import { Link,useParams } from "react-router-dom";
import tweetApi from "../api/tweet";
import Replies from "./Replies";

const TweetDetail = () => {
    const [tweet,setTweet] = useState([]);
    const [user,setUser] = useState([]);

    const { tweetId } = useParams();

    useEffect(()=>{
        tweetApi.getTweet(tweetId)
        .then((_tweet) => {
            setTweet(_tweet)
            setUser(_tweet[0].user)
        });
    },[])
    
    console.log(tweet);
    console.log(user);

    return(
        <>
            {/* ツイート詳細表示画面 */}
            <div className="mr-auto ml-auto max-w-5xl p-3">
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
                {/* {tweet.posted_at} */}
                <Replies tweetId={tweetId}/>
            </div>
        </>
    )
};

export default TweetDetail;