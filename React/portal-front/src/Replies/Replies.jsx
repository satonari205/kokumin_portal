import {useContext, useEffect,useState} from "react";
import { useParams,useNavigate } from "react-router-dom";
import replyApi from "../api/reply";
import ReplyForm from "./ReplyForm";
import Reply from "./Reply";
import MyReply from "./MyReply";
import TweetDetail from "../Tweets/TweetDetail";
import { UserContext } from "../context/userContext";

const Replies = () => {
    const [replies,setReplies] = useState([]);
    const { user } = useContext(UserContext);
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
            <TweetDetail tweetId={tweetId}/>
            <div>
                <ReplyForm tweetId={tweetId}/>
                <div className="shadow-inner min-h- rounded-lg bg-slate-100 p-3">
                {replies.map((reply) => (
                    (user && user.id === reply.user.id) ? (
                        <MyReply key={reply.id} reply={reply} />
                    ) : (
                        <Reply key={reply.id} reply={reply} />
                    )
                ))}
                </div>
            </div>
        </>
    )
};

export default Replies;