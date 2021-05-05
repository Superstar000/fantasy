import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Box } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import MuiCardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import MuiButton from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CheckIcon from "@material-ui/icons/Check";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { green, purple } from "@material-ui/core/colors";
import Submenubar from "./subcomponent/Submenubar";
import Socialbar from "./subcomponent/socialbar";
import Fantasyprizecomponent from "./subcomponent/Fantasyprizecomponent";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
  
  },
 
  root: {
    display: "inline-block",
    border: "1px solid #E336FF",
    
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px",
      marginRight: 0,
      marginLeft: 0,
    },
  },
  title: {
    fontFamily: "initial",
    marginBottom: "60px",
  },
  reffirst: {
    [theme.breakpoints.up("lg")]: {
      marginBottom: "58px",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "28px",
    },
  },

  minH: {
    [theme.breakpoints.up("md")]: {
      minHeight: "270px",
    },
    [theme.breakpoints.up("lg")]: {
      minHeight: "270px",
    },
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const Button = withStyles((theme) => ({
  root: {
    padding: "10px 40px",
    fontSize: "1rem",
    [theme.breakpoints.up("lg")]: {
      padding: "10px 40px",
    },
    [theme.breakpoints.down("lg")]: {
      padding: "4px 10px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "10px 30px",
    },
  },
}))(MuiButton);


export default function FantasyPoints(props) {
  const classes = useStyles();
  const history = useHistory();
  const { data } = props;

  return (
    <div className={classes.container}>
      <div className="col-lg-12 col-md-12 col-sm-12" style={{ padding: '3% 10%' }}>
      <Card style={{ borderRadius: "10px",    background: 'pink' }}>
        <div
          style={{
            marginLeft: "5vw",
            marginTop: "5vw",
            textAlign: "center",
            color: "#585858",
            fontSize: "35",
            fontFamily: "Montserrat-Bold",
            display: "inline",
          }}
        >
          <Button
            color="secondary"
            style={{ position: "relative", height: "50px" }}
            aria-controls="simple-menu"
            aria-haspopup="true"
            href="#/fantasyprizes"
          >
            <h3><b>Prizes</b></h3>
          </Button>
          <Button
            color="secondary"
            style={{ position: "relative", height: "50px" }}
            aria-controls="simple-menu"
            aria-haspopup="true"
            href="#/fantasywinners"
          >
            <h3><b>Winners</b></h3>
          </Button>
        </div>
        <div
          style={{
            marginLeft: "5vw",
            marginTop: "1vw",
            textAlign: "left",
            color: "#A5A5A5",
            fontSize: "24",
            fontFamily: "Montserrat-Medium",
          }}
        >
          Overall Prizes
        </div>
        <div className="col-md-12 col-sm-12">
          <div className="col-md-12 col-sm-12">
            <Fantasyprizecomponent style={{ display: "flex" }} />
          </div>
          <div className="col-md-12 col-sm-12">
            <Fantasyprizecomponent style={{ display: "flex" }} />
          </div>
          <div className="col-md-12 col-sm-12">
            <Fantasyprizecomponent style={{ display: "flex" }} />
          </div>
        </div>
      </Card>
      <div>&emsp;</div>
      <Card style={{ borderRadius: "10px",  background: 'pink' }}>
        <div className="col-md-6 col-sm-12" style={{ padding: "0px"}}>
          <Card style={{ borderRadius: "10px", margin: "2%" }}>
            <div>
              <img src="img/prize1.png" width="100%" />
              <CardContent className={classes.reffirst}>
                <div
                  style={{
                    textAlign: "left",
                    color: "#585858",
                    fontFamily: "Montserrat-Bold",
                    fontSize: "24",
                  }}
                >
                  <b>Manager of the Month</b>
                </div>
                <div
                  style={{
                    textAlign: "left",
                    color: "#283870",
                    fontFamily: "Montserrat-Regular",
                    fontSize: "18",
                  }}
                >
                  <img
                    src="img/cup.png"
                    width="100vw"
                    height="100vw"
                    style={{ float: "right" }}
                  ></img>
                  <i
                    class="fa fa-check-circle-o"
                    style={{ fontSize: "18", color: "red" }}
                  ></i>
                  Tablet computer
                  <br />
                  <i
                    class="fa fa-check-circle-o"
                    style={{ fontSize: "18", color: "red" }}
                  ></i>
                  Bluetooth speaker
                  <br />
                  <i
                    class="fa fa-check-circle-o"
                    style={{ fontSize: "18", color: "red" }}
                  ></i>
                  Copy of FIFA 21
                  <br />
                  <i
                    class="fa fa-check-circle-o"
                    style={{ fontSize: "18", color: "red" }}
                  ></i>
                  Nike Flight match ball
                  <br />
                  <i
                    class="fa fa-check-circle-o"
                    style={{ fontSize: "18", color: "red" }}
                  ></i>
                  Nike manager jacket
                  <br />
                  <br />
                  <b>
                    FPL goody bag consisting of a rucksack, t-shirt, mug, water
                    bottle, stress ball, pen, pad and key ring
                  </b>
                  <br />
                  <i
                    class="fa fa-check-circle-o"
                    style={{ fontSize: "18", color: "red" }}
                  ></i>
                  FPL goody bag consisting of a rucksack, t-shirt, mug, water
                  bottle, stress ball, pen, pad and key ring
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
        <div className="col-md-6 col-sm-12" style={{ padding: "0px", background: 'pink' }}>
          <Card style={{ borderRadius: "10px", margin: "10%",}}>
            <div>
              <img src="img/prize3.png" width="100%" />
              <CardContent className={classes.reffirst}>
                <div
                  style={{
                    textAlign: "left",
                    color: "#585858",
                    fontFamily: "Montserrat-Bold",
                    fontSize: "24",
                  }}
                >
                  <b>Manager of the Week</b>
                </div>
                <div
                  style={{
                    textAlign: "left",
                    color: "#283870",
                    fontFamily: "Montserrat-Regular",
                    fontSize: "18",
                  }}
                >
                  <img
                    src="img/cup.png"
                    width="100vw"
                    height="100vw"
                    style={{ float: "right" }}
                  ></img>
                  <i
                    class="fa fa-check-circle-o"
                    style={{ fontSize: "18", color: "red" }}
                  ></i>
                  Copy of FIFA 21
                  <br />
                  <i
                    class="fa fa-check-circle-o"
                    style={{ fontSize: "18", color: "red" }}
                  ></i>
                  Nike Flight match ball
                  <br />
                  <i
                    class="fa fa-check-circle-o"
                    style={{ fontSize: "18", color: "red" }}
                  ></i>
                  FPL rucksack
                  <br />
                  <i
                    class="fa fa-check-circle-o"
                    style={{ fontSize: "18", color: "red" }}
                  ></i>
                  FPL mug
                  <br />
                  <br />
                  <b>
                    Top 20 Managers each week (incl Manager of the Week) will
                    receive:
                  </b>
                  <br />
                  <i
                    class="fa fa-check-circle-o"
                    style={{ fontSize: "18", color: "red" }}
                  ></i>
                  FPL t-shirt, stress ball, pen, pad and key ring
                  <br />
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
        <div
          style={{
            float: "left",
            fontSize: "18",
            textAlign: "left",
            padding: "4vw",
            fontFamily: "Montserrat-Regular",
             background: 'pink'
          }}
        >
          * To be eligible to win a weekly prize, you must have joined the game
          before the start of the season or a minimum of two clear Gameweeks
          before the one in which you are top of the weekly leaderboard. Players
          who have played a chip (including Bench Boost, Free Hit Triple Captain
          or Wildcard) will not be eligible to win a weekly prize for the
          Gameweek that such a chip has been used.
        </div>
      </Card>
      </div>
      
    </div>
  );
}
