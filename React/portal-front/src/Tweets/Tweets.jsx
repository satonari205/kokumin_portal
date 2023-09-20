import axios from "axios";
import { useState,useEffect } from "react";
import Tweet from "./Tweet";
import CreateModal from "./CreateModal";
import {headers} from "../api/auth";

const Tweets = () => {
    const [tweets,setTweets] = useState([]);

    const base_URL = 'http://127.0.0.1:8000/api/v1/';

    const acc = localStorage.getItem('accesstoken');
    console.log(acc);

    if(acc){
        headers['Authorization'] = 'JWT ' + acc;
    }

    useEffect(()=>{
            axios.get(base_URL + 'tweets/',{
            params:{
                _sort: '-posted_at',
                _limit: 30,
            },
            headers: headers,
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