import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Components/Main/Main";

export default (
  <Switch>
    <Route exact path='/' component={Main} />
  </Switch>
)