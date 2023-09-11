import Tweet from "./Tweet";
import { CreateModal } from "./CreateModal";
import {useTweets,TweetProvider} from "../context/tweetContext";

const Tweets = () => {
    const tweets = useTweets();

    return (
        <>
            <TweetProvider>
                <div className="divide-y mr-auto ml-auto max-w-5xl p-3">
                    <div className="p-4 text-center">掲示板</div>
                    {/* {console.log(tweets)} */}
                    {tweets.map((tweet) => (
                        <Tweet key={tweet.id} tweet={tweet} />
                    ))}
                </div>
                <CreateModal />
            </TweetProvider>
        </>
    );
};

export default Tweets;