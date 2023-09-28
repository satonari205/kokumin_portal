import axios from "axios";
import { useState,useEffect,useContext } from "react";
import { UserContext } from "../context/userContext";
import Tweet from "./Tweet";
import CreateForm from "./CreateForm";

const Tweets = () => {
    const [tweets,setTweets] = useState([]);
    const { user} = useContext(UserContext);

    const baseURL = 'http://127.0.0.1:8000/api/';

    const fetchTweets = async () => {
        await axios.get(baseURL + 'tweets/',
        {
            headers:{
            'Content-Type': 'application/json',
        },
        withCredentials: true,
        }
        )
        .then(response => {
            setTweets(response.data);
        })
        .catch(error => {
            console.error('Error fetching tweets:', error);
        })
    }

    const newTweet = async () => {
        const res = await axios.get(baseURL + 'tweets/',{
            params:{
                user: user.id,
                newtweet: true,
            }
        })
        .then(res => {
            const newTweetData = res.data;
            console.log(newTweetData);
            setTweets(prevTweets => [...prevTweets, newTweetData]);
            console.log(tweets);
        })
        .catch(err => {
            console.log(err);
        });
    };

    // const onNewTweet = () => {
    //     newTweet();
    // }

    useEffect(()=>{
            fetchTweets();
    },[]);

    // console.log(tweets);

    return (
        <>
            <div className="pb-3 text-center text-xl bold font-bold">Home(仮)</div>
            <CreateForm
                // onNewTweet={onNewTweet}
            />
            {/* 投稿した直後にTweetが表示された方が気持ちいいよな。 */}
            {tweets.map((tweet) => (
                <Tweet key={tweet.id} tweet={tweet} />
            ))}
        </>
    );
};

export default Tweets;