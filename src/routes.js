import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import About from './components/About';
import Main from './components/Main';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
);

export default Routes;
