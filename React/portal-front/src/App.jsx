import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import Tweets from "./Tweets/Tweets";
import TweetDetail from "./Tweets/TweetDetail";
import { Magazines } from "./Magazine/Magazines";
import { User } from "./Users/User";
import { Login } from "./Users/Login";
import { Signup } from "./Users/Signup";
import { Notices } from "./Notice/Notices";
import { NoMatch } from "./NoMatch";

const App = () => {

    return (
      <Router>
        <Navigation />
          <Routes>
            <Route path="/" element={<Tweets />} />
            <Route path="/replies/:tweetId" element={<TweetDetail />} />
            <Route path="/magazine" element={<Magazines />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
      </Router>
    );
}

export default App;
