import axios from 'axios';

const ENDPOINT_URL = 'http://127.0.0.1:8000/api/v1/bbs/'

const tweetApi = {
    async getTweet(id){
        const tweet = await axios
        .get(ENDPOINT_URL,{
            params:{
                id: id,
            },
        });
        return tweet.data;
    },
    async getTweets(){
        const tweets = await axios
        .get(ENDPOINT_URL,{
            params:{
                reply_to: null,
                _sort: '-posted_at',
                _limit: 30,
            },
        });
        return tweets.data;
    },
    async getReplies(tweetId){
        const replies = await axios
        .get(ENDPOINT_URL,{
            params:{
                reply_to: tweetId,
            }
        });
        return replies;
    },
    async post(tweet){
        const newTweet = await axios.post(ENDPOINT_URL,tweet);
        return newTweet;
    },
}

export default tweetApi;