import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const TweetDetail = ({ tweetList }) => {
    const { tweetId } = useParams(); // URLパラメータからツイートIDを取得
    const tweet = tweetList.find(tweet => tweet.id === parseInt(tweetId)); // ツイートIDに対応するツイートを検索

    if (!tweet) {
        return <div>Loading...</div>;
    }

    return(
        <>
            <div className="p-3">
                <div className="avatar flex justify-start w-1/2 m-2">
                    <span className="w-10 h-10">
                        <img className="rounded" src={tweet.user.image || "/images/default.jpg"} alt="userimg" />
                    </span>
                    <Link to={`/users/${tweet.user.id}`} className="leading-10 pl-3 w-1/2 hover:underline"> {/* 修正 */}
                        <p>{tweet.user.username}</p>
                    </Link>
                </div>
                <div className="p-4">
                    {tweet.content && !tweet.image && (
                    <a className="pt-4 pb-4">
                        {tweet.content}
                    </a>
                    )}
                    {!tweet.content && tweet.image && (
                    <a className="pt-4 pb-4">
                        <img src={tweet.image} alt="tweet.image" />
                    </a>
                    )}
                    {tweet.content && tweet.image && (
                    <a className="pt-4 pb-4">
                        {tweet.content}
                        <img src={tweet.image} alt="tweet.image" />
                    </a>
                    )}
                </div>
            </div>
            <div className="divider"></div>
            <div>
                {/* 返信するためのフォーム */}
            </div>
            <div className="divider"></div>
            <div className="p-3">
                <div className="avatar flex justify-start w-1/2 m-2">
                    <span className="w-10 h-10">
                        <img className="rounded" src={tweet.user.image || "/images/default.jpg"} alt="userimg" />
                    </span>
                    <Link to={`/users/${tweet.user.id}`} className="leading-10 pl-3 w-1/2 hover:underline"> {/* 修正 */}
                        <p>{tweet.user.username}</p>
                    </Link>
                </div>
                <div className="p-4">
                    {tweet.content && !tweet.image && (
                    <a className="pt-4 pb-4">
                        {tweet.content}
                    </a>
                    )}
                    {!tweet.content && tweet.image && (
                    <a className="pt-4 pb-4">
                        <img src={tweet.image} alt="tweet.image" />
                    </a>
                    )}
                    {tweet.content && tweet.image && (
                    <a className="pt-4 pb-4">
                        {tweet.content}
                        <img src={tweet.image} alt="tweet.image" />
                    </a>
                    )}
                </div>
            </div>
        </>
    )
};