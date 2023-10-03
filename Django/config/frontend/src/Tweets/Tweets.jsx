import axios from "axios";
import { useState,useEffect,useContext } from "react";
import { UserContext } from "../context/userContext";
import Tweet from "./Tweet";
import CreateForm from "./CreateForm";

const Tweets = () => {
    const [tweets,setTweets] = useState([]);
    const { user} = useContext(UserContext);

    const baseURL = 'http://127.0.0.1:8000/api/';
<<<<<<< HEAD
    // axios.defaults.xsrfCookieName = 'csrftoken';
    // axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';
=======
>>>>>>> bc07bfb8c55f2533d1cc2c78dc25cda1c52ec0a8

    const fetchTweets = async () => {
        await axios.get(baseURL + 'tweets/',
        {
            headers:{
            'Content-Type': 'application/json',
<<<<<<< HEAD
            // 'xsrfCookieName': 'XSRF-TOKEN',
            // 'xsrfHeaderName': 'X-XSRF-TOKEN',
=======
>>>>>>> bc07bfb8c55f2533d1cc2c78dc25cda1c52ec0a8
        },
        withCredentials: true,
        }
        )
        .then(response => {
<<<<<<< HEAD
            // fetchCsrfToken();
=======
>>>>>>> bc07bfb8c55f2533d1cc2c78dc25cda1c52ec0a8
            setTweets(response.data);
            console.log(response);
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

<<<<<<< HEAD
    // const fetchCsrfToken = async () => {
    //     const response = await axios.get(baseURL + 'api/csrf/',)
    //         .then(res => {
    //             console.log(res);
    //             return res.json();
    //         })
    //         .catch(e =>{
    //             console.error(e);
    //         });
    //     };

=======
>>>>>>> bc07bfb8c55f2533d1cc2c78dc25cda1c52ec0a8
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