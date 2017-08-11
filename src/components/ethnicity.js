import React, { Component } from 'react'

export default class Ethnicity extends Component {
  constructor(){
    super()
    this.state = {
      categories: ["White", "Hispanic, Latino, or Spanish Origin", "Black or African American", "Asian", "American Indian or Alaska Native", "Middles Eastern or North African", "Native Hawaiian or Other Pacific Islander", "Some other race, ethnicity, or origin"]
    }
  }



  render() {
    // NOTE: the unique keys are required to make react happy when rendering items in an array.

    let checkboxes = []
    for (let i = 0; i < this.state.categories.length; i++) {
      checkboxes.push(<div key={i + 10}><input key={this.state.categories[i]+1} type="checkbox" id={this.state.categories[i]} name="categories" value={this.state.categories[i]}/><label id={this.state.categories[i]} htmlFor={this.state.categories[i]}>{this.state.categories[i]}</label></div>)
    }

    return(
      <div>
        <h2> What categories describe you? </h2>
        <div> {checkboxes} </div>
      </div>
    );
  }
}
