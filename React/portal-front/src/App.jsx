import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./Navigation/Navigation";
import { Tweets } from "./Tweets/Tweets";
import { TweetDetail } from "./Tweets/TweetDetail";
import { NoMatch } from "./NoMatch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetList: [],
      userList: [],
    };
  }

  componentDidMount() {
    this.fetchTweetData();
    this.fetchUserData();
  }

  fetchTweetData = () => {
    axios.get("http://localhost:8000/api/v1/bbs/")
      .then((res) => {
        this.setState({ tweetList: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fetchUserData = () => {
    axios
      .get("http://localhost:8000/api/v1/accounts/")
      .then((res) => {
        this.setState({ userList: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { tweetList, userList } = this.state;

    return (
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Tweets tweetList={tweetList} />} />
          <Route path="/tweet/:tweetId" element={<TweetDetail tweetList={tweetList} />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
