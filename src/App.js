import React from "react";
import HomePage from "./HomePage";
import Login from "./Login";
import Otp from "./Otp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={Login} />
          <Route path="/otp" component={Otp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
