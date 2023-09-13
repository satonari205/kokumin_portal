import axios from 'axios';

const ENDPOINT_TWEETS = 'http://127.0.0.1:8000/api/v1/tweets/'

const tweetApi = {
    async getTweet(tweet_id){
        const responce = await axios
        .get(ENDPOINT_TWEETS,{
            params:{
                id: tweet_id,
            },
        });
        return responce.data;
    },
    async getTweets(){
        const tweets = await axios
        .get(ENDPOINT_TWEETS,{
            params:{
                _sort: '-posted_at',
                _limit: 30,
            },
        });
        return tweets.data;
    },
    async postTweet(tweet){
        const newTweet = await axios.post(ENDPOINT_TWEETS,tweet);
        return newTweet;
    },
}

export default tweetApi;