import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-geometry-component';
import 'babel-polyfill';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Sky from './components/Sky';
import Deals from './components/Deals';
import BuyDeal from './components/BuyDeal';

import backGround from './images/mirrorsedge2.jpg';
import backGround2 from './images/mirrorsedge3.jpg';
import backGround3 from './images/witcher3.jpg';

import data from './data.deals.gpn.json';
console.log(data);
class VRScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.color = 'red';
    this.state.selectedDeal = false;
    this.state.deals = data.deals;

    this.clickDealCube = this.clickDealCube.bind(this);
  }

  clickDealCube(id) {
    this.setState({
      selectedDeal: this.state.deals.find(el => el.id === id)
    })
  }

  render () {
    let vizualization = null;
    if(this.state.selectedDeal) {
      vizualization = <BuyDeal deal={this.state.selectedDeal} />
    } else {
      vizualization = <Deals selectedDeal={this.state.selectedDeal} deals={this.state.deals} onCubeClicked={this.clickDealCube} />
    }
    return (
      <Scene>
        <a-assets>
          <a-asset-item id="optimerBoldFont" src="https://rawgit.com/mrdoob/three.js/dev/examples/fonts/optimer_bold.typeface.json"></a-asset-item>
        </a-assets>

        <Camera>
          <a-cursor
            animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150">
          </a-cursor>
        </Camera>

        <Sky src={`url(${backGround3})`}/>

        {vizualization}

      </Scene>
    );
  }
}

ReactDOM.render(<VRScene/>, document.querySelector('.scene-container'));
