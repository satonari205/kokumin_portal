import { Tweet } from "./Tweet";

export const Tweets = ({ tweetList }) => {
    return (
        <div className="flex flex-col divide-y mr-auto ml-auto max-w-xl p-3">
            <div className="p-4 text-center">掲示板</div>
            {tweetList.map((tweet) => (
                <Tweet key={tweet.id} tweet={tweet} />
            ))}
        </div>
    );
};