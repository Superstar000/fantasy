import React, { Component } from "react";
import Axios from "axios";
import swal from 'sweetalert';
const footbartheme = {
  fontSize: "20px",
  color: '#7503fb',
  textTransform: 'uppercase'
}
const linktag = {
  textTransform: 'uppercase',
  color: 'white'
}
export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    }
  }
  sendMessage = (e) => {
    e.preventDefault();
    Axios({
      method: "POST",
      url: "/api/messages/send-message",
      data: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }
    }).then((res) => {
      console.log(res)
      swal("WELCOME!", "Message just sent successfully ", "success");
    })
  }

  changeNameHandler = (e, i) => {
    console.log(e.target.value)
    var tempName = e.target.value;
    this.setState({ name: tempName })
  }
  changeEmailHandler = (e) => {
    var tempEmail = e.target.value;
    this.setState({ email: tempEmail })
  }
  changeMessageHandler = (e) => {
    var tempMessage = e.target.value;
    this.setState({ message: tempMessage })
  }
  render() {
    return (
      <div style={{ opacity: 1 }}>
        <div id="" style={{ opacity: "1" }}>
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="col-md-1">
              </div>
              <div className="col-md-2">
                <div style={footbartheme} className="pb-3">Premier League  </div>
                <div className="row">
                  <div className="col-md-6" style={{ paddingLeft: '7.5px' }} >
                    <div><a className="linktag" href="">Home</a>  </div>
                    <div><a className="linktag" href="">Fixtures</a>  </div>
                    <div><a className="linktag" href="">Results</a>  </div>
                    <div><a className="linktag" href="">Tables </a></div>
                    <div><a className="linktag" href="">Transfers</a>  </div>
                    <div><a className="linktag" href="">Broadcast </a> </div>
                    <div><a className="linktag" href="">Tickets </a></div>
                    <div><a className="linktag" href="">Clubs</a></div>
                  </div>
                  <div className="col-md-6">
                    <div><a className="linktag" href="">Players</a> </div>
                    <div><a className="linktag" href="">Managers</a> </div>
                    <div><a className="linktag" href="">News </a></div>
                    <div><a className="linktag" href="">Social</a></div>
                    <div><a className="linktag" href="">Youth</a></div>
                    <div><a className="linktag" href="">Safeguarding</a></div>
                    <div><a className="linktag" href="">Social</a></div>
                    <div><a className="linktag" href="">History</a></div>
                    <div><a className="linktag" href="">Referees</a></div>
                  </div>
                </div>
              </div>
              <div className="col-md-1">
                <div style={footbartheme} className="pb-3">Fantasy</div>
                <div><a href="" className="linktag">FPL Home</a></div>
                <div><a href="" className="linktag">My Team</a></div>
                <div><a href="" className="linktag">FPL Transfers</a></div>
                <div><a href="" className="linktag">Leagues</a></div>
                <div><a href="" className="linktag">FPL Transfers</a></div>
                <div><a href="" className="linktag">Statistics</a></div>
                <div><a href="" className="linktag">The Scout</a></div>
              </div>
              <div className="col-md-1">
                <div style={footbartheme} className="pb-3">Stats</div>
                <div><a className="linktag" href="">Dashboard</a></div>
                <div><a className="linktag" href="">Player Stats</a></div>
                <div><a className="linktag" href="">Club Stats</a></div>
                <div><a className="linktag" href="">All-time Stats</a></div>
                <div><a className="linktag" href="">Records</a></div>
                <div><a className="linktag" href="">Head-to-Head</a></div>
                <div><a className="linktag" href="">Player Comparison</a></div>
                <div><a className="linktag" href="">Awards</a></div>
              </div>
              <div className="col-md-2">
                <div style={footbartheme} className="pb-3">Video</div>
                <div className="row">
                  <div className="col-md-6" style={{ paddingLeft: '7.5px' }} >
                    <img
                      src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg"
                      title="Contemplative Reptile" className="newvideo"
                    />
                    <img className="newvideo"
                      src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg"
                      title="Contemplative Reptile"
                    />
                    <img className="newvideo"
                      src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg"
                      title="Contemplative Reptile"
                    />
                  </div>
                  <div className="col-md-6" style={{ paddingLeft: '7.5px' }} >
                    <img src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg" className="newvideo" title="demo" ></img>
                    <img src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg" className="newvideo" title="demo" ></img>
                    <img src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg" className="newvideo" title="demo" ></img>
                  </div>
                </div>

              </div>
              <div className="col-md-2">
                <div style={footbartheme} className="pb-3">&nbsp;Communities</div>
                <div><a className="linktag" href="">Latest</a></div>
                <div><a className="linktag" href="">Programmes</a></div>
                <div><a className="linktag" href="">PL Kicks Heroes</a></div>
                <div><a className="linktag" href="">Strategy</a></div>
                <div><a className="linktag" href="">PL Primary Stars</a></div>
              </div>
              <div className="col-md-2">
                <div style={footbartheme} className="pb-3">More</div>
                <div className="row">
                  <div className="col-md-6 col-sm-6" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                    <div><a className="linktag" href="">Stay Well</a></div>
                    <div><a className="linktag" href="">No Room for Racism</a></div>
                    <div><a className="linktag" href="">Rainbow Laces</a></div>
                    <div><a className="linktag" href="">King of the Match</a></div>
                    <div><a className="linktag" href="">Transfers</a></div>
                    <div><a className="linktag" href="">VAR</a></div>
                    <div><a className="linktag" href="">Photos</a></div>
                    <div><a className="linktag" href="">Partners</a></div>
                    <div><a className="linktag" href="">ePremier League</a></div>
                  </div>
                  <div className="col-md-6 col-sm-4" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                    <div><a className="linktag" href="">Season Review</a></div>
                    <div><a className="linktag" href="">About</a></div>
                    <div><a className="linktag" href="">Nike Ball Hub</a></div>
                    <div><a className="linktag" href="">Contact Us</a></div>
                    <div><a className="linktag" href="">Poppy</a></div>
                    <div><a className="linktag" href="">Asia Trophy</a></div>
                    <div><a className="linktag" href="">Live</a></div>
                    <div><a className="linktag" href="">PL </a></div>
                    <div><a className="linktag" href="">Publications</a></div>
                    <div><a className="linktag" href="">Legal</a></div>
                  </div>
                </div>
              </div>
              <div className="col-md-1">

              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-8" style={{ color: "white", size: "12px" }}>
              © PREMIER LEAGUE 2021 Modern Slavery Statement Equality, Diversity and Inclusion Standard Terms & Conditions Policies Cookie Policy Back To Top
          </div>
            <div className="col-md-1">
              <img src="/logo-bottom.png" style={{ color: "white" }} width="50px" height="50px" title="logo"></img>
            </div>
            <div className="col-md-2">
              <a href="#" className="fa fa-twitter"></a>
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-linkedin"></a>
              <a href="#" className="fa fa-flickr"></a>
            </div>
            <div className="col-md-1">

            </div>
          </div>
        </div>
        {/* <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2020 Issaaf Kattan React Land Page Template. Design by{" "}
              <a href="http://www.templatewire.com" rel="nofollow">
                TemplateWire
              </a>
            </p>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Contact;
