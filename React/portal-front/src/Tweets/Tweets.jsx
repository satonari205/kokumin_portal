import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tweet from "./Tweet";
import CreateModal from "./CreateModal";

const Tweets = () => {
    const [tweets,setTweets] = useState([]);
    const navigate = useNavigate();

    const baseURL = 'http://127.0.0.1:8000/api/';

    useEffect(()=>{
            axios.get(baseURL + 'tweets/',{
            params:{
                _sort: '-posted_at',
                _limit: 30,
            },
            headers:{
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            })
            .then(response => {
                setTweets(response.data);
            })
            .catch(error => {
                console.error('Error fetching tweets:', error);
                alert('ログインが必要です。')
                navigate('/login');
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