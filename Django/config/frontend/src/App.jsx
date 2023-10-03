import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { useContext } from "react";
import { UserContext } from "./context/userContext";
import Tweets from "./Tweets/Tweets";
import Replies from "./Replies/Replies";
import Magazines from "./Magazine/Magazines";
import User from "./Users/User";
import Login from "./Users/Login";
import Register from "./Users/Register";
import Notices from "./Notice/Notices";
import NoMatch from "./NoMatch";

const App = () => {
    const { user } = useContext(UserContext);

    return (
      <Router>
        <Navigation />
        <div className="mr-auto ml-auto max-w-3xl p-3 text-sm">
          <Routes>
            <Route path="/" element={<Tweets />} />
            <Route path="/replies/:tweetId" element={<Replies />} />
            <Route path="/magazines" element={<Magazines />} />
            <Route path="/users/:userId" element={<User />} />
            {user ? null : (
              <>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </>
            )}
            <Route path="/notices" element={<Notices />} />
            <Route path="/nomatch" element={<NoMatch />} />
          </Routes>
        </div>
      </Router>
    );
}

export default App;
