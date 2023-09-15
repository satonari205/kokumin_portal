const Reply = ({reply}) => {
    return(
        <>
            <div className="chat chat-start mb-4">
                <div className="chat-header">
                    <span className="hover:link">
                        reply.username
                    </span>
                    <time className="text-xs opacity-50 ml-2">
                        {reply.posted_at}
                    </time>
                </div>
                <div className="chat-bubble">
                    {reply.content}
                </div>
            </div>
        </>
    );
}

export default Reply;