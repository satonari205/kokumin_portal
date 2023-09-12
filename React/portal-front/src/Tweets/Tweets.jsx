import { useState,useEffect } from "react";   
import Tweet from "./Tweet";
import { CreateModal } from "./CreateModal";
import tweetApi from "../api/tweet";

const Tweets = () => {
    const [tweets,setTweets] = useState([]);

    useEffect(()=>{
        tweetApi.getTweets()
        .then(tweets => {
            console.log(tweets);
            setTweets(tweets)
        })
    },[]);

    return (
        <>
            <div className="divide-y mr-auto ml-auto max-w-5xl p-3">
                <div className="p-4 text-center">ひろば</div>
                {tweets.map((tweet) => (
                    <Tweet key={tweet.id} tweet={tweet} />
                ))}
            </div>
            <CreateModal />
        </>
    );
};

export default Tweets;