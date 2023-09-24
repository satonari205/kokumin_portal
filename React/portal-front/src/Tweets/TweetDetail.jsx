import { useEffect,useState} from "react";
import { 
    Link,
    // useParams 
} 
from "react-router-dom";
import auth from "../api/auth";

const TweetDetail = ({tweetId}) => {
    const [user,setUser] = useState([]);
    const [tweet,setTweet] = useState([]);

    // const { tweetId } = useParams();
    
    useEffect(()=>{
        auth.get(`tweets/${tweetId}/`,{
            id: tweetId,
        })
        .then(res => {
            console.log(res)
            setUser(res.data.user);
            setTweet(res.data);
        })
        .catch(error => {
            console.error('Error fetching tweets:', error);
        })
    },[tweetId]);

    return(
        <>
            {/* ツイート詳細表示画面 */}
            <div className="avatar flex justify-start w-1/2 m-2">
                <span className="w-10 h-10">
                    {/* <img className="rounded" src={tweet.user.image || "/images/default.jpg"} alt="userimg" /> */}
                    <img className="rounded" src={"/images/default.jpg"} alt="userimg" />
                </span>
                <Link to={`/users/${user.id}`} className="leading-10 pl-3 w-1/2 hover:underline">
                    <p className="hover:link">{user.nickname}</p>
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
            <span>
                投稿日時: {tweet.posted_at}
            </span>
        </>
    )
};

export default TweetDetail;