import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import auth from "../api/auth";

const User = () => {
    const [user,setUser] = useState([]);
    const { userId } = useParams();

    useEffect( ()=>{
        async function fetchUser(){
            await auth.get(`users/${userId}/`)
            .then(res=>{
                console.log(res);
                setUser(res.data);
            })
            .catch(error=>{
                console.log(error);
                alert(error);
            })
        };
        fetchUser();
    },[])

    return(
        <>
            <div className="mr-auto ml-auto max-w-xl p-4">
                <div>
                    <img src="/images/default.jpg" className="mr-auto ml-auto w-36 rounded-lg shadow-2xl" alt="プロフィール画像" />
                    <div>
                        <h1 className="text-3xl font-bold text-center mt-5">{user.nickname}</h1>
                        <p className="py-6">
                            {user.bio}
                        </p>
                    </div>
                </div>
                <Tabs>
                    <TabList>
                        <Tab>ひろば（仮）</Tab>
                        <Tab>マガジン（仮）</Tab>
                    </TabList>
                    <TabPanel>
                        {/* <UserTweets/> */}
                        <h1>HOMEです</h1>
                    </TabPanel>
                    <TabPanel>
                        {/* <UserMagaginess/> */}
                        <h1>Aboutです</h1>
                    </TabPanel>
                </Tabs>
            </div>
        </>
    )
};

export default User;