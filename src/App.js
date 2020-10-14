import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Browse, SignUp, SignIn } from "./pages/index";
import * as ROUTES from "./constants/routes";

export default function App() {
  return (
    <>
      <Router>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
        <Route path={ROUTES.SIGN_IN}>
          <SignIn />
        </Route>
        <Route path={ROUTES.SIGN_UP}>
          <SignUp />
        </Route>
        <Route path={ROUTES.BROWSE}>
          <Browse />
        </Route>
      </Router>
    </>
  );
}
