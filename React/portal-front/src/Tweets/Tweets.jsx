import { Tweet } from "./Tweet";
import { CreateModal } from "./CreateModal";

export const Tweets = ({ tweetList }) => {
    return (
        <>
            <div className="divide-y mr-auto ml-auto max-w-5xl p-3">
                <div className="p-4 text-center">掲示板</div>
                {tweetList.map((tweet) => (
                    <Tweet key={tweet.id} tweet={tweet} />
                    ))}
            </div>
            <CreateModal />
        </>
    );
};