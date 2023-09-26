import { useEffect,useState} from "react";
import {Link} from "react-router-dom";
import auth from "../api/auth";

const TweetDetail = ({tweetId}) => {
    const [user,setUser] = useState([]);
    const [tweet,setTweet] = useState([]);

    useEffect(()=>{
        auth.get(`tweets/${tweetId}/`,{
            id: tweetId,
        })
        .then(res => {
			const modifiedData = {
				...res.data,
				image1: `http://127.0.0.1:8000${res.data.image1}`,
				image2: `http://127.0.0.1:8000${res.data.image2}`,
			};
            console.log(modifiedData);
			setUser(res.data.user);
			setTweet(modifiedData);
        })
        .catch(error => {
            console.error('Error fetching tweets:', error);
        })
    },[tweetId]);

	console.log(tweet.image1);
	console.log(tweet.image2);

    return(
        <>
            <div className="avatar flex justify-start w-1/2 m-2">
                <span className="w-10 h-10">
                    {/* <img className="rounded" src={tweet.user.image || "/images/default.jpg"} alt="userimg" /> */}
                    <img className="rounded" src={"/images/default.jpg"} alt="userimg" />
                </span>
                <Link to={`/users/${user.id}`} className="leading-10 pl-3 w-1/2 hover:underline">
                    <p className="hover:link">{user.nickname}</p>
                </Link>
            </div>
            <div className="p-4">
                {tweet.content && !tweet.image && (
                <a className="pt-4 pb-4">
                    {tweet.content}
                </a>
                )}
                <div className="flex flex-wrap">
					{tweet.image1 &&
						<a href={tweet.image1} target="_blank">
							<img
							src={tweet.image1}
							alt="tweet.image1"
							className="max-w-xs"
							/>
						</a>
					}
					{tweet.image2 &&
						<a href={tweet.image2} target="_blank">
							<img
								src={tweet.image2}
								alt="tweet.image2"
								className="max-w-xs"
							/>
						</a>
					}
				</div>
        	</div>
			<span>
				投稿日時: {tweet.posted_at}
			</span>
        </>
    )
};

export default TweetDetail;