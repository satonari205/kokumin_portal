import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Tweet from "./Tweet";
import CreateForm from "./CreateForm";

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
            <div className="pb-3 text-center text-xl bold font-bold">Home(仮)</div>
            <CreateForm />
            {tweets.map((tweet) => (
                <Tweet key={tweet.id} tweet={tweet} />
            ))}
        </>
    );
};

export default Tweets;