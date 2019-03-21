//// 8. go to App.js in the main folder and add the route for this Google page.
//1. Bring components to the pages to build the views.
//2. Bring pages to App.js to set the route to display the complete page look.
 
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Google from "./pages/Google";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Google} />
          <Route exact path="/google" component={Google} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
