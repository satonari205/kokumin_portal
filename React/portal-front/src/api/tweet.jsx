// import auth from './auth';

// const tweet_URL = 'tweets/'

// const tweetApi = {
//     async getTweet(tweet_id){
//         const res = await auth
//         .get(tweet_URL,{
//             params:{
//                 id: tweet_id,
//             },
//         });
//         return res.data;
//     },
//     async getTweets(){
//         const tweets = await auth
//         .get(tweet_URL,{
//             params:{
//                 _sort: '-posted_at',
//                 _limit: 30,
//             },
//         });
//         return tweets.data;
//     },
//     async postTweet(content, image1, image2){
//         const newTweet = await auth
//         .post(tweet_URL + 'create/',{
//             content: content,
//             image1: image1,
//             image2: image2,
//         });
//         return newTweet;
//     },
// };

// export default tweetApi;