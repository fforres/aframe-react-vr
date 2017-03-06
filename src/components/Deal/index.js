import { Entity } from 'aframe-react'
import React, { Component } from 'react'
import { circularPositionFromIndex } from '../../utils'


class Deal extends Component {
  constructor() {
    super()
    this.state = {};
  }
  render () {
    const { width, height, depth, photoUrl, id } = this.props
    const { x, y, z } = this.props.position

    return (
      <Entity
        geometry={{'primitive': 'box', width: width, height: height, depth: depth}}
        material={{src: `url(${photoUrl})`, color: 'ffffff'}}
        position={`${x} ${y} ${z}`}
        onMouseEnter={(e) => {
          console.log(e, this)
        }}
        onClick={() => {this.props.onClick(id) }}
      />
    )
  }
}

export default Deal;
