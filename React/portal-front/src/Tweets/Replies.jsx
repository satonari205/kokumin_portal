import {useEffect,useState} from "react";
import replyApi from "../api/reply";
// import TweetDetail from "./TweetDetail";
import Reply from "./Reply";
import MyReply from "./MyReply";
import ReplyForm from "./ReplyForm";
import { useParams,Link } from "react-router-dom";

const Replies = () => {
    const [user,setUser] = useState([]);
    const [tweet,setTweet] = useState([]);
    const [replies,setReplies] = useState([]);

    const { tweetId } = useParams();

    useEffect(()=>{
        replyApi.getReplies(tweetId)
        .then((_replies) => {
            setUser(_replies.Tweet.user)
            setTweet(_replies.Tweet)
            setReplies(_replies.Reply)
        });
    },[])

    console.log(user);
    console.log(tweet);
    console.log(replies);

    return(
        <>
            <div className="mr-auto ml-auto max-w-5xl p-3">
                {/* <TweetDetail tweet={tweet} /> */}
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
                <div>
                    <ReplyForm />
                        <div className="shadow-inner rounded-lg bg-slate-100 p-3">
                        {replies.map((reply) => (
                            <Reply key={reply.id} reply={reply} />
                        ))}
                        {/* ログインユーザーの保持ができたら,myReplyだけclassName=”chat-end”になるように書き換える */}
                        <MyReply />
                    </div>
                </div>
            </div>
        </>
    )
};

export default Replies;