import {useEffect,useState} from "react";
import replyApi from "../api/reply";
import Reply from "./Reply";
import MyReply from "../Tweets/MyReply";
import ReplyForm from "./ReplyForm";
import { useParams,useNavigate } from "react-router-dom";
import TweetDetail from "../Tweets/TweetDetail";

const Replies = () => {
    const [replies,setReplies] = useState([]);
    const navigate = useNavigate();

    const { tweetId } = useParams();

    useEffect(()=>{
        replyApi.getReplies(tweetId)
        .then((_replies) => {
            console.log(_replies);
            setReplies(_replies.Reply)
        })
        .catch((error)=>{
            alert(error);
            navigate('/');
        });
    },[tweetId])

    return(
        <>
            <div className="mr-auto ml-auto max-w-5xl p-3">
                <TweetDetail tweetId={tweetId}/>
                <div>
                    <ReplyForm tweetId={tweetId}/>
                    <div className="shadow-inner min-h- rounded-lg bg-slate-100 p-3">
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