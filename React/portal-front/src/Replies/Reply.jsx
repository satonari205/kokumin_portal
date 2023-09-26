import { Link } from "react-router-dom";

const Reply = ({reply}) => {
    return(
        <>
            <div className="chat chat-start mb-4">
                <div className="chat-header">
                    <Link to={`/users/${reply.user.id}`} className="hover:link">
                        {reply.user.nickname}
                    </Link>
                    <time className="text-xs opacity-50 ml-2">
                        {reply.posted_at}
                    </time>
                </div>
                <div className="chat-bubble">
                    {reply.content}
                </div>
            </div>
            <div className="max-w-xs max-h-56">
                {reply.image}
            </div>
        </>
    );
}

export default Reply;