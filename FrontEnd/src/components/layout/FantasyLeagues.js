import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import Navigation from './components/navigation';
import FantasyLeagues from './components/FantasyLeagues';
 
import { connect } from "react-redux";

var rootStyle = {
  width: "100%",
  height: "2000px",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: 'radial-gradient(circle, #ff0000b5, #e29fe6, #840090)',
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
        <FantasyLeagues data={this.state.landingPageData.Service} />
       
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
