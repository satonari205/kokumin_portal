import { createContext,useContext,useState,useEffect} from "react";
import tweetApi from "../api/tweet";

const TweetContext = createContext();

const TweetProvider = ({children}) => {
    const [tweets, setTweets] = useState([]);

    useEffect(()=>{
        tweetApi.getTweets()
        .then(_tweets => {
            setTweets(_tweets);
        })},[]);

    return (
        <TweetContext.Provider value={tweets}>
            {children}
        </TweetContext.Provider>
        );
}

const useTweets = () => useContext(TweetContext);

export {useTweets,TweetProvider}