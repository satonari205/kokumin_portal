import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import auth from "../api/auth";
import Tweet from "../Tweets/Tweet";
import Magazines from "../Magazine/Magazines";

const User = () => {
    const [user,setUser] = useState([]);
    const [tweets,setTweets] = useState([]);
    const { userId } = useParams();

    useEffect( ()=>{
        async function fetchUser(){
            await auth.get(`users/${userId}/`)
            .then(res=>{
                console.log(res);
                setUser(res.data);
            })
            .catch(error=>{
                alert(error);
            })
        };
        fetchUser();
        // {tweetの処理}
        async function fetchUserTweet(){
            await auth.get('tweets/',{
                params:{
                    user: userId,
                },
            })
            .then(res => {
                console.log(res.data);
                setTweets(res.data);
            })
            .catch(error =>{
                console.log(error);
            })
        }
        fetchUserTweet();
    },[])

    return(
        <>
            <div>
                <img src="/images/default.jpg" className="mr-auto ml-auto w-36 rounded-lg shadow-2xl" alt="プロフィール画像" />
                <div>
                    <h1 className="text-3xl font-bold text-center mt-5">{user.nickname}</h1>
                    <p className="py-6">
                        {user.bio}
                    </p>
                </div>
            </div>
            <Tabs className="font">
                <TabList>
                    <Tab>ひろば（仮）</Tab>
                    <Tab>マガジン（仮）</Tab>
                </TabList>
                <TabPanel>
                    {tweets.map(tweet => (
                        <Tweet key={tweet.id} tweet={tweet}/>
                    ))}
                </TabPanel>
                <TabPanel>
                    <Magazines/>
                </TabPanel>
            </Tabs>
        </>
    )
};

export default User;