/* eslint react/prefer-stateless-function: 0 */
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './components/HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
