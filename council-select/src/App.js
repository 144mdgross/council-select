import React, { Component } from 'react';
import { BrowserRouter as Router, Router, Link } from 'react-router-dom'

import './App.css';
import Ethnicity from './components/ethnicity'


class App extends Component {
  render() {
    return (
      <form name="demographics" action="#">
        <Ethnicity />
        <input type="submit" />
      </form>
    );
  }
}

export default App;
