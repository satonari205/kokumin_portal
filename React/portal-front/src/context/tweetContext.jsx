// import { useContext,useReducer,useEffect} from "react";
// import bbsApi from "../api/tweet";


// const tweetReducer = (tweets, action) => {
//     console.log(action);
//     switch (action.type) {
//       case "tweet/getTweets":
//         return [...action.tweets];
//     //   case "tweet/post":
//     //     return newTweet;
//     //     });
//       default:
//         return 'hoge';
//     }
//   };

// const TweetProvider = ({children}) => {
//     const [tweets,dispatch] = useReducer(tweetReducer,[]);

//     useEffect(()=>{
//         bbsApi.getTweets()
//         .then(tweets => {
//             dispatch({type: 'tweet/getTweets', tweets: tweets})
//         })
//     },[]);

//     return (
//         <TweetContext.Provider value={tweets}>
//             <TweetDispatchContext.Provider value={dispatch}>
//                 {children}
//             </TweetDispatchContext.Provider>
//         </TweetContext.Provider>
//     );
// }

// const useTweets = () => useContext(TweetContext);
// const useDispatchTweets = () => useContext(TweetDispatchContext);

// export {useTweets,useDispatchTweets,TweetProvider}