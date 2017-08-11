import React, { Component } from 'react';

import './App.css';
import Ethnicity from './components/ethnicity'

class App extends Component {
  constructor(props) {
    super(props)

    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    alert('you pressed submit')

  }

  render() {
    return (
      <form name="demographics" onSubmit={this.handleSubmit.bind(this)}>
        <Ethnicity />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
