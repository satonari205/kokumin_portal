const UserLink = ()=> {
    return(
        <div className="avatar flex justify-start w-1/2 m-2">
        <span className="w-10 h-10">
            <img
            className="rounded"
            src={tweet.user.image || "/images/default.jpg"}
            alt="userimg"
            />
        </span>
        <Link
            to={`/user/${tweet.user.id}`}
            className="leading-10 pl-3 w-1/2 hover:underline"
        >
            <p>{tweet.user.username}</p>
        </Link>
        </div>
    );
}