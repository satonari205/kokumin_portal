import React from "react";
import { Link } from "react-router-dom";

const Tweet = ({ tweet }) => {
  return (
    <>
      <div className="p-3">
        <div className="avatar flex justify-start w-1/2 m-2">
        <span className="w-10 h-10">
            <img
              className="rounded"
              src={tweet.user.image || "/images/default.jpg"}
              alt="userimg"
            />
        </span>
        <Link
            to={`/user/${tweet.user.id}`}
            className="leading-10 pl-3 w-1/2 hover:underline"
        >
            <p>{tweet.user.username}</p>
        </Link>
        </div>
        {(tweet.content || tweet.image1 || tweet.image2) && (
        <a className="pt-4 pb-4">
            {tweet.content}
            {tweet.image1 && <img src={tweet.image1} alt="tweet.image1" />}
            {tweet.image2 && <img src={tweet.image2} alt="tweet.image2" />}
        </a>
        )}
        <div className="flex justify-end pt-3">
        <Link to={`/reply/${tweet.id}`} className="btn btn-ghost btn-sm mt-3">
            コメントする
        </Link>
        </div>
      </div>
    </>
  );
};

export default Tweet;