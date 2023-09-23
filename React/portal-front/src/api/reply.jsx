import {auth,headers} from './auth';

const replyApi = {
    async getReplies(reply_id){
        const res = await auth
        .get('replies/',{
            params:{
                tweet: reply_id,
            },
        });
        return res.data;
    },
    async post(tweetId,user_id,content,image){
        const formData = new FormData();
        formData.append('tweet', tweetId);
        formData.append('user', user_id);
        formData.append('content', content);
        formData.append('image', image);

        const newReply = await auth
        .post('replies/create/',
            formData,
        );
        return newReply;
    },
}

export default replyApi;