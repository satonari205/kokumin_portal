import axios from 'axios';

const ENDPOINT_REPLIES = 'http://127.0.0.1:8000/api/v1/replies/'

const replyApi = {
    async getReplies(reply_id){
        const res = await axios
        .get(ENDPOINT_REPLIES,{
            params:{
                tweet: reply_id,
            }
        });
        return res.data;
    },
    async post(reply){
        const newReply = await axios.post(ENDPOINT_REPLIES);
        return newReply;
    },
}

export default replyApi;