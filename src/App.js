import React from "react";
import HomePage from "./HomePage";
import Login from "./Login";
import Otp from "./Otp";
import ProductDetail from "./ProductDetail";
import UserProfile from "./UserProfile";
import NewProduct from "./NewProduct";
import ChatClient from "./Chat";
import ReportUser from "./Report";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/otp" component={Otp} />
          <Route path="/users/chat" component={ChatClient} />
          <Route path="/users/report" component={ReportUser} />
          <Route path="/users" component={UserProfile} />
          <Route path="/pets/id" component={NewProduct} />
          <Route path="/pets" component={ProductDetail} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
