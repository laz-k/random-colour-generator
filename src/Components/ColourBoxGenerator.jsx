import React, { Component } from 'react'
import ColourBox from './ColourBox'

export default class ColourBoxGenerator extends Component {
  static defaultProps = {
    numberOfBoxes: 16
  }
  render() {

    const boxesArray = Array.from({length: this.props.numberOfBoxes})

    return (
      <div className='colour-boxes-container'>
        {boxesArray.map((id) => <ColourBox key={id} /> )}
      </div>
    )
  }
}
