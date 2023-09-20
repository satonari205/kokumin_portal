import { useState,useEffect } from "react";
import Tweet from "./Tweet";
import CreateModal from "./CreateModal";
import {auth,headers} from "../api/auth";

const Tweets = () => {
    const [tweets,setTweets] = useState([]);

    const acc = localStorage.getItem('accesstoken');
    console.log(acc);
    debugger

    if(acc){
        headers['Authorization'] = 'JWT ' + acc;
    }
    debugger

    useEffect(()=>{
        debugger
        const tweetList = async () => {
            await auth.get('tweets/',{
            params:{
                _sort: '-posted_at',
                _limit: 30,
            },
            })
            .then(response => {
                setTweets(response.data);
                debugger
            })
            .catch(error => {
                console.error('Error fetching tweets:', error);
                debugger
            })
        }
        tweetList();
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