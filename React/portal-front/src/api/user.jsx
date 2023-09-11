import axios from 'axios';

const ENDPOINT_URL = 'http://127.0.0.1:8000/api/v1/accounts/'

const userApi = {
    async getUser(user_id){
        const user = await axios
        .get(ENDPOINT_URL,{
            params:{
                id: user_id
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