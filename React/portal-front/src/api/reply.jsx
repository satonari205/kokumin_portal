import {auth} from './auth';

const replyApi = {
    async getReplies(reply_id){
        const res = await auth
        .get('replies/',{
            params:{
                tweet: reply_id,
            }
        });
        return res.data;
    },
    async post(reply){
        const newReply = await auth
        .post('replies/');
        return newReply;
    },
}

export default replyApi;