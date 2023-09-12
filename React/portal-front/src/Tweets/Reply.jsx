const Reply = ({reply}) => {
    return(
        <>
            <div>
                <p>{reply.id}</p>
                <p>{reply.tweet}</p>
                <p>{reply.user}</p>
                <p>{reply.content}</p>
                <p>{reply.posted_at}</p>
            </div>
        </>
    );
}

export default Reply;