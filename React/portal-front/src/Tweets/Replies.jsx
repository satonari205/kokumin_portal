import { useEffect,useState} from "react";
import { Link,useParams } from "react-router-dom";
import tweetApi from "../api/tweet";
import replyApi from "../api/reply";
import Reply from "./Reply";
import MyReply from "./MyReply";
import ReplyForm from "./ReplyForm";

export const Replies = () => {
    const [tweet,setTweet] = useState([]);
    const [replies,setReplies] = useState([]);

    const { tweetId } = useParams();

    useEffect(()=>{
        tweetApi.getTweet(tweetId)
        .then((_tweet) => {
            setTweet(_tweet[0])
        });
        replyApi.getReplies(tweetId)
        .then((_replies) => {
            setReplies(_replies)
        });
    },[])

    return(
        <>
            {/* ツイート詳細表示画面 */}
            <div className="mr-auto ml-auto max-w-5xl p-3">
                <div className="avatar flex justify-start w-1/2 m-2">
                    <span className="w-10 h-10">
                        {/* <img className="rounded" src={tweet.user.image || "/images/default.jpg"} alt="userimg" /> */}
                        <img className="rounded" src={"/images/default.jpg"} alt="userimg" />
                    </span>
                    {/* <Link to={`/user/${tweet.user.id}`} className="leading-10 pl-3 w-1/2 hover:underline"> 修正 */}
                    <Link to="/user/1" className="leading-10 pl-3 w-1/2 hover:underline"> {/* 修正 */}
                        {/* <p className="hover:link">{tweet.user.username}</p> */}
                        <p className="hover:link">tweet.user.username</p>
                    </Link>
                </div>
                {console.log(tweet)}
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
                <div className="divider-y">
                {/* 返信するためのフォーム */}
                </div>
                <div>
                </div>
                <div>
                {/* 返信されたRepliesの表示 */}
                {/* <div className="divide-y mr-auto ml-auto max-w-5xl p-3"> */}
                <ReplyForm />
                <div className="p-4 text-center">コメント</div>
                    {console.log(replies)}
                    <div>
                    {replies.map((reply) => (
                        <Reply key={reply.id} reply={reply} />
                        ))}
                    <MyReply />
                    </div>
                </div>
                {/* </div> */}
            </div>
        </>
    )
};