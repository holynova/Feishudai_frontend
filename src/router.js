import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Login from "./routes/Login.js";

import Signin from "./routes/Signin.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/signin" component={Signin} />
    </Router>
  );
}

export default RouterConfig;
