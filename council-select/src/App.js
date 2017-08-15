import React from ‘react’
import {
  BrowserRouter as Router,
  Route,
  Link
} from ‘react-router-dom’

import ‘./App.css’;
import Ethnicity from ‘./components/ethnicity’

const Quiz = () => (
   <form name=“demographics” >
      <Ethnicity />
      <input type=“submit” value=“Submit” />
    </form>
)

const Results = () => (
  <div> Results </div>
)

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to=“/”>Quiz</Link></li>
        <li><Link to=“/results”>Results</Link></li>
      </ul>

     <hr/>

     <Route exact path=“/” component={Quiz}/>
      <Route path=“/results” component={Results}/>
    </div>
  </Router>
)
export default BasicExample
