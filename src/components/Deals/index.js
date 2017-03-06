import { Entity } from 'aframe-react'
import React, { Component } from 'react'
import Deal from '../Deal'
import { circularPositionFromIndex } from '../../utils'


class Deals extends Component {
  constructor() {
    super()
    this.state = {};
    this.state.boxSize = 0.6;
    this.renderDeal = this.renderDeal.bind(this);
  }
  render () {
    const { deals } = this.props;
    return (
      <Entity>
        {deals.map(this.renderDeal)}
      </Entity>
    )
  }

  renderDeal (deal, index) {
    const { boxSize } = this.state;
    let position = circularPositionFromIndex(index, boxSize)
    const {
      id,
      grid4ImageUrl,
      shortAnnouncementTitle,
      dealUrl,
      images,
    } = deal;
    const image = images[0].big || grid4ImageUrl;
    return (
      <Deal
        key={index}
        id={id}
        webUrl={dealUrl}
        title={shortAnnouncementTitle}
        width={boxSize} height={boxSize} depth={boxSize}
        position={position}
        index={index}
        photoUrl={image}
        onClick={this.props.onCubeClicked}
      />
    )
  }
}

export default Deals;
