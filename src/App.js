import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostListing from "./containers/PostListing";
import Header from "./containers/Header";
import PostDetails from "./containers/PostDetails";
import Footer from "./containers/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={PostListing} />
        <Route path="/post/:postId" component={PostDetails} />
        <Route>404 Not Found!</Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
