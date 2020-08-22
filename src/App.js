import React from "react";
import HomePage from "./HomePage";
import Login from "./Login";
import Otp from "./Otp";
import ProductDetail from "./ProductDetail";
import UserProfile from "./UserProfile";
import NewProduct from "./NewProduct";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/otp" component={Otp} />
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
