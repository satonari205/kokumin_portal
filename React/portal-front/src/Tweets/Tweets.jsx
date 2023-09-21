import auth from "../api/auth";
import { useState,useEffect } from "react";
import Tweet from "./Tweet";
import CreateModal from "./CreateModal";

const Tweets = () => {
    const [tweets,setTweets] = useState([]);

    useEffect(()=>{
            auth.get('tweets/',{
            params:{
                _sort: '-posted_at',
                _limit: 30,
            },
            })
            .then(response => {
                setTweets(response.data);
            })
            .catch(error => {
                console.error('Error fetching tweets:', error);
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