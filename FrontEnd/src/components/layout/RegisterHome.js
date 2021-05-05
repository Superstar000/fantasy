import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import Navigation from './components/navigation';
import RegisterHome from './../auth/RegisterHome';
 
import { connect } from "react-redux";

import BG from './home.png';

var rootStyle = {
  width: "100%",
  backgroundImage: `url(${BG})`,
  height: "100%",
  backgroundSize: 'cover',
  backgroundPosition: 'center'
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
       {/* <Header data={this.state.landingPageData.Header} />*/}
        {/* <Features data={this.state.landingPageData.Features} /> */}
        {/*<Gallery data={this.state.landingPageData.Gallery} />*/}
        <RegisterHome/>
        {/* <Testimonials data={this.state.landingPageData.Testimonials} /> */}
        {/* <Team data={this.state.landingPageData.Team} /> */}
         
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
