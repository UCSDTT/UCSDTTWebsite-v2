import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import Home from './containers/Home';
import Garnett from './containers/Garnett';
import MoreRush from './containers/MoreRush';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/garnett" component={Garnett}> </Route>
      <Route path="/rush" component={MoreRush}> </Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
