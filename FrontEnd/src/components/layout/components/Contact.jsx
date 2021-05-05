import React, { Component } from "react";
import Axios from "axios";
import swal from 'sweetalert';
import Footer from './../../../img/background/footer.png';


const footbartheme = {
  fontSize: "20px",
  color: '#7503fb',
  textTransform: 'uppercase'
};
const linktag = {
  textTransform: 'uppercase',
  color: 'white'
};
var rootStyle = {
  width: "100%",
  backgroundImage: `url(${Footer})`,
  backgroundSize: 'cover',
  paddingTop: '50px',
  margin: '0px',
  minWidth:'300px'

};

export default function Contact() {

  return (
    <div style={rootStyle}>
      <div className="row">
        <div className="col-md-12 col-lg-12">
          <div className="col-md-1"></div>
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
          <div className="col-md-6" style={{ color: "white", size: "12px",textAlign:'center'}}>
            © PREMIER LEAGUE 2021 Modern Slavery Statement Equality, Diversity and Inclusion Standard Terms & Conditions Policies Cookie Policy Back To Top
            </div>
          <div className="col-md-1" ></div>
          <div className="col-md-4 footer_logo" >
           
                <a href="#" className="fa fa-twitter " ></a>&emsp;
                <a href="#" className="fa fa-facebook "></a>&emsp;
                <a href="#" className="fa fa-linkedin "></a>&emsp;
                <a href="#" className="fa fa-google "></a>&emsp;
          </div>
         </div>

    </div>
  );

}


