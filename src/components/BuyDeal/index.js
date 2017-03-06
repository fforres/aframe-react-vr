import { Entity } from 'aframe-react'
import React, { Component } from 'react'
import Deal from '../Deal'
import { circularPositionFromIndex } from '../../utils'


class Deals extends Component {
  constructor() {
    super()
    this.state = {};
    this.state.boxSize = 0.9;
    this.renderDeal = this.renderDeal.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }
  onEnter(){
    console.log('WE ENTERED', this);
    this.setState({
      animate:true,
    });
  }

  render () {
    const { deal } = this.props;
    return (this.renderDeal(deal, 0))
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
    console.log(grid4ImageUrl, image)
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
        onMouseEnter={this.onEnter}
        onClick={this.props.onCubeClicked}
      />
    )
  }
}

export default Deals;
