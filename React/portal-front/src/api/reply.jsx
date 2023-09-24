import auth from './auth';

const replyApi = {
    async getReplies(tweet_id){
        const res = await auth
        .get(`replies/${tweet_id}`);
        return res.data;
    },
    async post(tweetId,user_id,content,image){
        const formData = new FormData();
        formData.append('tweet', tweetId);
        formData.append('user', user_id);
        formData.append('content', content);
        if(image){
            formData.append('image', image);
        }
        const newReply = await auth
        .post('replies/create/',
            formData,
        );
        return newReply;
    },
}

export default replyApi;