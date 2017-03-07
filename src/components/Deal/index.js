import { Entity } from 'aframe-react'
import React, { Component } from 'react'
import { circularPositionFromIndex } from '../../utils'


class Deal extends Component {
  constructor() {
    super()
    this.state = {};
    this.onEnter = this.onEnter.bind(this)
  }
  onEnter() {
    console.log('entered', this.props.id)
  }
  render () {
    const {
      width,
      height,
      depth,
      photoUrl,
      id,
      selected,
      position,
    } = this.props;
    const { x, y, z } = position;
    console.log(
      width,
      height,
      depth)
    let animation = {
      property: 'scale',
      dir: 'normal',
      loop: false,
      delay: 0,
      dur: 500,
      from: '0 0 0',
      to: '1 1 1',
    }
    return (
      <Entity
        geometry={{'primitive': 'box', width: width, height: height, depth: depth}}
        material={{src: `url(${photoUrl})`, color: '#ffffff'}}
        position={`${x} ${y} ${z}`}
        animation__scale={animation}
        onMouseEnter={this.onEnter}
        onClick={() => { this.props.onClick(id, position) }}
      />
    )
  }
}

export default Deal;
