import {useEffect,useState} from "react";
import replyApi from "../api/reply";
import Reply from "./Reply";
import MyReply from "./MyReply";
import ReplyForm from "./ReplyForm";

const Replies = ({tweetId}) => {
    const [user,setUser] = useState([]);
    const [replies,setReplies] = useState([]);

    useEffect(()=>{
        replyApi.getReplies(tweetId)
        .then((_replies) => {
            setReplies(_replies)
        });
    },[])
    
    console.log(user);

    return(
        <>
            <div>
                <ReplyForm />
                <div className="p-4 text-center">コメント</div>
                    <div className="shadow-inner rounded-lg bg-slate-50 p-3">
                    {replies.map((reply) => (
                        <Reply key={reply.id} reply={reply} />
                    ))}
                    <MyReply />
                </div>
            </div>
        </>
    )
};

export default Replies;