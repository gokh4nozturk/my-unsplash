import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Pages/Home";
import SearchResults from "./components/SearchBox/SearchResult";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search/:searchKey">
            <SearchResults />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
