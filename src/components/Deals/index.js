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
    console.log(this.props.deals)
    return (
      <Entity>
        {deals.map(this.renderDeal)}
      </Entity>
    )
  }

  renderDeal (deal, index) {
    const { boxSize } = this.state;
    let position = circularPositionFromIndex(index, boxSize)
    console.log(deal)
    const {
      id,
      grid4ImageUrl,
      shortAnnouncementTitle,
      dealUrl,
    } = deal;
    return (
      <Deal
        key={index}
        id={id}
        webUrl={dealUrl}
        title={shortAnnouncementTitle}
        width={boxSize} height={boxSize} depth={boxSize}
        position={position}
        index={index}
        photoUrl={grid4ImageUrl}
        onClick={this.props.onAvatarClicked}
      />
    )
  }
}

export default Deals;
