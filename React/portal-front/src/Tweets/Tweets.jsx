import axios from "axios";
import { useState,useEffect } from "react";
import Tweet from "./Tweet";
import CreateForm from "./CreateForm";

const Tweets = () => {
    const [tweets,setTweets] = useState([]);

    const baseURL = 'http://127.0.0.1:8000/api/';

    axios.defaults.headers['Content-Type'] = 'application/json';
    axios.defaults.withCredentials = true;

    const fetchTweets = async () => {
        await axios.get(baseURL + 'tweets/',
        // {
        //     headers:{
        //     'Content-Type': 'application/json',
        // },
        // withCredentials: true,
        // }
        )
        .then(response => {
            setTweets(response.data);
        })
        .catch(error => {
            console.error('Error fetching tweets:', error);
        })
    }

    const handleCreateTweet = async () => {
        await axios.get('tweets/',{
            params:{

            }
        })
        .then(res => {
            setTweets([...tweets, res.data]);
        })
        .catch(err => {
            console.log(err);
        });
    };

    useEffect(()=>{
            fetchTweets();
        },[]);

    return (
        <>
            <div className="pb-3 text-center text-xl bold font-bold">Home(仮)</div>
            <CreateForm />
            {/* 投稿した直後にTweetが表示された方が気持ちいいよな。 */}
            {tweets.map((tweet) => (
                <Tweet key={tweet.id} tweet={tweet} />
            ))}
        </>
    );
};

export default Tweets;