import {useContext, useEffect,useState} from "react";
import { useParams,useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import replyApi from "../api/reply";
import ReplyForm from "./ReplyForm";
import Reply from "./Reply";
import MyReply from "./MyReply";
import TweetDetail from "../Tweets/TweetDetail";
import { UserContext } from "../context/userContext";

const Replies = () => {
    const [replies,setReplies] = useState([]);
    const [isLoading,setLoading] = useState(true);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const { tweetId } = useParams();

    useEffect(()=>{
        replyApi.getReplies(tweetId)
        .then((_replies) => {
            console.log(_replies);
            setReplies(_replies.Reply);
            setLoading(false);
        })
        .catch((error)=>{
            alert(error);
            navigate('/');
        });
    },[tweetId])

    return(
        <>
            { isLoading
                ? (
                    <div className="mt-10 mx-auto w-10 -translate-x-1/3">
                        <RotatingLines
                            strokeColor="blue"
                            strokeWidth="3"
                            animationDuration="0.75"
                            width="50"
                            visible={true}
                        />
                    </div>
                ) : (
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
            }
        </>
    )
};

export default Replies;