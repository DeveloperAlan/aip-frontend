import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import TopDeals from "./top_deals";
import NewDeals from "./new_deals";
import Forums from "./forums";
import Account from "./account";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2>Cheap Aussie</h2>
            <ul className="menu">
              <li>
                <Link to="top-deals">Top Deals</Link>
              </li>
              <li>
                <Link to="new-deals">New Deals</Link>
              </li>
              <li>
                <Link to="forums">Forums</Link>
              </li>
              <li>
                <Link to="Account">Account</Link>
              </li>
            </ul>
          </div>

          <Route path="/top-deals" component={TopDeals} />
          <Route path="/new-deals" component={NewDeals} />
          <Route path="/forums" component={Forums} />
          <Route path="/account" component={Account} />
        </div>
      </Router>
    );
  }
}

export default App;
