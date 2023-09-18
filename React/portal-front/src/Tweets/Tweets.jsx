import { useState,useEffect } from "react";
import {useCookies} from "react-cookie";
import Tweet from "./Tweet";
import { CreateModal } from "./CreateModal";
import tweetApi from "../api/tweet";

const Tweets = () => {
    const [tweets,setTweets] = useState([]);
    const [cookies] = useCookies();
    console.log(cookies['accesstoken']);

    // const headers = {
    //         'Authorization': 'Bearer ' + cookies['accesstoken'],
    //         'Content-Type': 'application/json',
    //         withCredentials: true,
    // }
    const acc = localStorage.getItem('accesstoken'); 
    console.log(acc);
    const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + acc,
            withCredentials: true,
    }

    useEffect(()=>{
        tweetApi.getTweets(headers)
        .then(tweets => {
            console.log(tweets);
            setTweets(tweets)
        })
        .catch(error => {
            console.error('Error fetching tweets:', error);
        });
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