import React, { Component } from 'react';
import {HashRouter, Route} from 'react-router-dom';
import test from './components/Test/Test.js';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route path='/' component={test} exact />
        </div>
      </HashRouter>
    );
  }
}

export default App;
