import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import Navigation from './components/navigation';
import FantasyHome from './components/FantasyHome';
import Contact from './components/Contact';
import { connect } from "react-redux";

var rootStyle = {
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
        <FantasyHome data={this.state.landingPageData.Service} />
        <Contact data={this.state.landingPageData.Contact}/>
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
