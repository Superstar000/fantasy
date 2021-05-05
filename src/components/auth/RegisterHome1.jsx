import React, { useState, useEffect } from "react";
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
import Socialbar from "./../layout/components/subcomponent/socialbar";
import Submenubar from "./../layout/components/subcomponent/Submenubar";

import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect, useSelector, useDispatch } from "react-redux";

import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

import Radio from "@material-ui/core/Radio";

import TextField from "@material-ui/core/TextField";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    paddingTop: "40px",
    paddingBottom: "30px",
  },
  txtAlign: {
    textAlign: "left",
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
      padding: "20px",
    },
    [theme.breakpoints.down("md")]: {},
  },
  reffirst1: {
    [theme.breakpoints.up("lg")]: {
      color: "#ff2882",
    },
    [theme.breakpoints.down("md")]: {
      color: "#ff2882",
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

const CardActions = withStyles((theme) => ({
  root: {
    padding: "10px",
    [theme.breakpoints.up("lg")]: {
      padding: "14px 25px",
    },
    [theme.breakpoints.down("md")]: {
      padding: "15px 25px ",
    },
  },
}))(MuiCardActions);

function Register1(props) {
  const classes = useStyles();
  const history = useHistory();
  const { data, auth } = props;

  const [club, setClub] = useState("");
  const [errors, setErrors] = useState("");

  const handleChange = (flag) => {
    setClub(flag);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if(club==''){
      toast.success("Select one club please", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    const clubData = {
      favourite_club: club,
    };
    const userData = auth.reg_info;
    const user_data = { ...userData, ...clubData };
    props.registerUser(user_data, history, 2);
    // console.log(userData);
  };

  return (
    // const { errors } = this.state;

    <div className={classes.container} id="buy-space">
      <h2 className={classes.title}></h2>
      <ToastContainer closeOnClick={true} closeButton={false} />
 
      <form noValidate onSubmit={onSubmit}>
        <div className="col-md-12 col-sm-12" style={{ padding: "0 10%" }}>
          <Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                style={{ textAlign: "center" }}
              >
                WELCOME
                <br />
              </Typography>
            </CardContent>
            <div className="col-md-12 col-sm-12">
              <div className="col-md-2 col-sm-2"></div>
              <div className="col-md-2 col-sm-2 register_fav">
                <input
                  type="radio"
                  name="emotion"
                  id="club1"
                  class="input-hidden regclub"
                  onChange={(e) => {
                    handleChange(1);
                  }}
                />
                <label for="club1">
                  <img src="img/clubs/Arsenal.png" alt="I'm sad" />
                </label>
              </div>
              <div className="col-md-2 col-sm-2 register_fav">
                <input
                  type="radio"
                  name="emotion"
                  id="club2"
                  class="input-hidden regclub"
                  onChange={(e) => {
                    handleChange(2);
                  }}
                />
                <label for="club2">
                  <img src="img/clubs/Arsenal.png" alt="I'm sad" />
                </label>
              </div>
              <div className="col-md-2 col-sm-2 register_fav">
                <input
                  type="radio"
                  name="emotion"
                  id="club3"
                  class="input-hidden regclub"
                  onChange={(e) => {
                    handleChange(3);
                  }}
                />
                <label for="club3">
                  <img src="img/clubs/Arsenal.png" alt="I'm sad" />
                </label>
              </div>
              <div className="col-md-2 col-sm-2 register_fav">
                <input
                  type="radio"
                  name="emotion"
                  id="club4"
                  class="input-hidden regclub"
                  onChange={(e) => {
                    handleChange(4);
                  }}
                />
                <label for="club4">
                  <img src="img/clubs/Arsenal.png" alt="I'm sad" />
                </label>
              </div>
              <div className="col-md-2 col-sm-2"></div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div className="col-md-2 col-sm-2"></div>
              <div className="col-md-2 col-sm-2 register_fav">
                <input
                  type="radio"
                  name="emotion"
                  id="club5"
                  class="input-hidden regclub"
                  onChange={(e) => {
                    handleChange(5);
                  }}
                />
                <label for="club5">
                  <img src="img/clubs/Arsenal.png" alt="I'm sad" />
                </label>
              </div>
              <div className="col-md-2 col-sm-2 register_fav">
                <input
                  type="radio"
                  name="emotion"
                  id="club6"
                  class="input-hidden regclub"
                  onChange={(e) => {
                    handleChange(6);
                  }}
                />
                <label for="club6">
                  <img src="img/clubs/Arsenal.png" alt="I'm sad" />
                </label>
              </div>
              <div className="col-md-2 col-sm-2 register_fav">
                <input
                  type="radio"
                  name="emotion"
                  id="club7"
                  class="input-hidden regclub"
                  onChange={(e) => {
                    handleChange(7);
                  }}
                />
                <label for="club7">
                  <img src="img/clubs/Arsenal.png" alt="I'm sad" />
                </label>
              </div>
              <div className="col-md-2 col-sm-2 register_fav">
                <input
                  type="radio"
                  name="emotion"
                  id="club8"
                  class="input-hidden regclub"
                  onChange={(e) => {
                    handleChange(8);
                  }}
                />
                <label for="club8">
                  <img src="img/clubs/Arsenal.png" alt="I'm sad" />
                </label>
              </div>
              <div className="col-md-2 col-sm-2"></div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div className="col-md-2 col-sm-2"></div>
              <div className="col-md-2 col-sm-2 register_fav">
                <input
                  type="radio"
                  name="emotion"
                  id="club9"
                  class="input-hidden regclub"
                  onChange={(e) => {
                    handleChange(9);
                  }}
                />
                <label for="club9">
                  <img src="img/clubs/Arsenal.png" alt="I'm sad" />
                </label>
              </div>
              <div className="col-md-2 col-sm-2 register_fav">
                <input
                  type="radio"
                  name="emotion"
                  id="club10"
                  class="input-hidden regclub"
                  onChange={(e) => {
                    handleChange(10);
                  }}
                />
                <label for="club10">
                  <img src="img/clubs/Arsenal.png" alt="I'm sad" />
                </label>
              </div>
              <div className="col-md-2 col-sm-2 register_fav">
                <input
                  type="radio"
                  name="emotion"
                  id="club11"
                  class="input-hidden regclub"
                  onChange={(e) => {
                    handleChange(11);
                  }}
                />
                <label for="club11">
                  <img src="img/clubs/Arsenal.png" alt="I'm sad" />
                </label>
              </div>
              <div className="col-md-2 col-sm-2 register_fav">
                <input
                  type="radio"
                  name="emotion"
                  id="club12"
                  class="input-hidden regclub"
                  onChange={(e) => {
                    handleChange(12);
                  }}
                />
                <label for="club12">
                  <img src="img/clubs/Arsenal.png" alt="I'm sad" />
                </label>
              </div>
              <div className="col-md-2 col-sm-2"></div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div className="col-md-2 col-sm-2"></div>
              <div className="col-md-2 col-sm-2 register_fav">
                <input
                  type="radio"
                  name="emotion"
                  id="club13"
                  class="input-hidden regclub"
                  onChange={(e) => {
                    handleChange(13);
                  }}
                />
                <label for="club13">
                  <img src="img/clubs/Arsenal.png" alt="I'm sad" />
                </label>
              </div>
              <div className="col-md-2 col-sm-2 register_fav">
                <input
                  type="radio"
                  name="emotion"
                  id="club14"
                  class="input-hidden regclub"
                  onChange={(e) => {
                    handleChange(14);
                  }}
                />
                <label for="club14">
                  <img src="img/clubs/Arsenal.png" alt="I'm sad" />
                </label>
              </div>
              <div className="col-md-2 col-sm-2 register_fav">
                <input
                  type="radio"
                  name="emotion"
                  id="club15"
                  class="input-hidden regclub"
                  onChange={(e) => {
                    handleChange(15);
                  }}
                />
                <label for="club15">
                  <img src="img/clubs/Arsenal.png" alt="I'm sad" />
                </label>
              </div>
              <div className="col-md-2 col-sm-2 register_fav">
                <input
                  type="radio"
                  name="emotion"
                  id="club16"
                  class="input-hidden regclub"
                  onChange={(e) => {
                    handleChange(16);
                  }}
                />
                <label for="club16">
                  <img src="img/clubs/Arsenal.png" alt="I'm sad" />
                </label>
              </div>
              <div className="col-md-2 col-sm-2"></div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div className="col-md-2 col-sm-2"></div>
              <div className="col-md-2 col-sm-2 register_fav">
                <input
                  type="radio"
                  name="emotion"
                  id="club17"
                  class="input-hidden regclub"
                  onChange={(e) => {
                    handleChange(17);
                  }}
                />
                <label for="club17">
                  <img src="img/clubs/Arsenal.png" alt="I'm sad" />
                </label>
              </div>
              <div className="col-md-2 col-sm-2 register_fav">
                <input
                  type="radio"
                  name="emotion"
                  id="club18"
                  class="input-hidden regclub"
                  onChange={(e) => {
                    handleChange(18);
                  }}
                />
                <label for="club18">
                  <img src="img/clubs/Arsenal.png" alt="I'm sad" />
                </label>
              </div>
              <div className="col-md-2 col-sm-2 register_fav">
                <input
                  type="radio"
                  name="emotion"
                  id="club19"
                  class="input-hidden regclub"
                  onChange={(e) => {
                    handleChange(19);
                  }}
                />
                <label for="club19">
                  <img src="img/clubs/Arsenal.png" alt="I'm sad" />
                </label>
              </div>
              <div className="col-md-2 col-sm-2 register_fav">
                <input
                  type="radio"
                  name="emotion"
                  id="club20"
                  class="input-hidden regclub"
                  onChange={(e) => {
                    handleChange(20);
                  }}
                />
                <label for="club20">
                  <img src="img/clubs/Arsenal.png" alt="I'm sad" />
                </label>
              </div>
              <div className="col-md-2 col-sm-2"></div>
            </div>

            <div className="col-md-12">
              <Button
                onClick={() => history.push("/register")}
                variant="contained"
                color="primary"
                style={{
                  marginLeft: "20px",
                  marginRight: "20px",
                  textAlign: "left",
                }}
              >
                <font style={{ textAlign: "left" }}>
                  <b>Back</b>
                </font>
              </Button>
              <Button
                onClick={onSubmit}
                variant="contained"
                color="secondary"
                style={{ textAlign: "left", marginRight: "20px" }}
              >
                <font style={{ textAlign: "left" }}>
                  <b>Next</b>
                </font>
              </Button>

              <a href="#" class="fa fa-twitter"></a>
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-linkedin"></a>
              <a href="#" class="fa fa-flickr"></a>
            </div>
            <div>&nbsp;</div>
          </Card>
        </div>
      </form>
      {/* <div  className="col-md-12 col-sm-12"  style={{ padding: '10%' }}>  
        <Socialbar/>
      </div> */}
    </div>
  );
}  
Register1.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(
  withRouter(Register1)
);
