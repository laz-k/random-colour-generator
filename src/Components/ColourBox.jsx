import React, { Component } from 'react'
import {randomColGen} from './../helpers'


export default class ColourBox extends Component {

  constructor(props){
    super(props);
    this.state = {colour: randomColGen() }
    this.changeColour = this.changeColour.bind(this);
  }

  changeColour(){
    this.setState({colour: randomColGen() })
  }

  render() {
    return (
      
      <div onClick={this.changeColour}  className="colour-box" style={{background: this.state.colour }} >
      </div>
    )
  }
}
