import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import Navigation from './components/navigation';
import FantasyStats from './components/FantasyStats';
 
import { connect } from "react-redux";

import BG from './home.png';

var rootStyle = {
  width: "100%",
  backgroundImage: 'radial-gradient(circle, #ff0000b5, #e29fe6, #840090)',
  height: "2000px",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minWidth:'300px'
};
export class App extends Component {
  state = {
    landingPageData: {},
  }


  render() {
    return (
      <div style={rootStyle}>
      <div>
        <Navigation data = {this.state.landingPageData.Nav} />
        <FantasyStats data={this.state.landingPageData.Service} />
         
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  translator: state.translator,
});

export default connect(
  mapStateToProps
)(withRouter(App));
