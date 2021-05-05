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
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";

import Checkbox from "@material-ui/core/Checkbox";
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

function Register2(props) {
  const classes = useStyles();
  const history = useHistory();
  const { data, auth } = props;

  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  const [checked6, setChecked6] = useState(false);
  const [checked7, setChecked7] = useState(false);
  const [checked8, setChecked8] = useState(false);
  const [checked9, setChecked9] = useState(false);
  const [checked10, setChecked10] = useState(false);
  const [checked11, setChecked11] = useState(false);
  const [checked12, setChecked12] = useState(false);
  const [checked13, setChecked13] = useState(false);

  const [agreechecked, setAgreeChecked] = useState(false);

  const handleAgreeChange = (event) => {
    setAgreeChecked(event.target.checked);
  };
  const handleChange = (event) => {
    if (event.target.id == 1) {
      console.log(props);

      setChecked1(event.target.checked);
    } else if (event.target.id == 2) {
      setChecked2(event.target.checked);
    } else if (event.target.id == 3) {
      setChecked3(event.target.checked);
    } else if (event.target.id == 4) {
      setChecked4(event.target.checked);
    } else if (event.target.id == 5) {
      setChecked5(event.target.checked);
    } else if (event.target.id == 6) {
      setChecked6(event.target.checked);
    } else if (event.target.id == 7) {
      setChecked7(event.target.checked);
    } else if (event.target.id == 8) {
      setChecked8(event.target.checked);
    } else if (event.target.id == 9) {
      setChecked9(event.target.checked);
    } else if (event.target.id == 10) {
      setChecked10(event.target.checked);
    } else if (event.target.id == 11) {
      setChecked11(event.target.checked);
    } else if (event.target.id == 12) {
      setChecked12(event.target.checked);
    } else if (event.target.id == 13) {
      setChecked13(event.target.checked);
    }
  };
  useEffect(() => {
    
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!agreechecked) {
      toast.success("Agree this rule please", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    const comData = {
      partner_email_communication: "1",
      premier_email_communication: "2",
    };
    const userData = auth.reg_info;
    const user_data = { ...userData, ...comData };

    props.registerUser(user_data, history, 3);
    
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

            <div className="col-md-12">
              <h3>Premier League Email Communications</h3>
              <p className="text-justify">
                Let us know if you would like the Premier League to send you
                information about any of the following topics
              </p>
            </div>
            <div className="col-md-12">
              <div className="col-md-2"></div>
              <div className="col-md-1 text-right">
                <Checkbox
                  id="1"
                  checked={checked1}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
              <div className="col-md-2 text-left">General communication</div>
              <div className="col-md-1 text-right">
                <Checkbox
                  id="2"
                  checked={checked2}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
              <div className="col-md-2 text-left">Fantasy</div>
              <div className="col-md-1 text-right">
                <Checkbox
                  id="3"
                  checked={checked3}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
              <div className="col-md-2 text-left">schedules</div>
              <div className="col-md-1"></div>
            </div>
            <div className="col-md-12">
              <div className="col-md-2"></div>
              <div className="col-md-1 text-right">
                <Checkbox
                  id="4"
                  checked={checked4}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
              <div className="col-md-2 text-left">Fixture changes</div>
              <div className="col-md-1 text-right">
                <Checkbox
                  id="5"
                  checked={checked5}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
              <div className="col-md-2 text-left">Communities</div>
              <div className="col-md-1 text-right"></div>
              <div className="col-md-2 text-left"></div>
              <div className="col-md-1"></div>
            </div>

            <div className="col-md-12 status-padding3"></div>

            <div className="col-md-12">
              <h3>Partner Email Communications</h3>
              <p className="text-justify">
                Let us know if you would like the Premier League to send you
                information on behalf of the following official partners
              </p>
            </div>
            <div className="col-md-12">
              <div className="col-md-2"></div>
              <div className="col-md-1 text-right">
                <Checkbox
                  id="6"
                  checked={checked6}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
              <div className="col-md-2 text-left">Barclays</div>
              <div className="col-md-1 text-right">
                <Checkbox
                  id="7"
                  checked={checked7}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
              <div className="col-md-2 text-left">Broadcaster</div>
              <div className="col-md-1 text-right">
                <Checkbox
                  id="8"
                  checked={checked8}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
              <div className="col-md-2 text-left">Coca-Cola</div>
              <div className="col-md-1"></div>
            </div>
            <div className="col-md-12">
              <div className="col-md-2"></div>
              <div className="col-md-1 text-right">
                <Checkbox
                  id="9"
                  checked={checked9}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
              <div className="col-md-2 text-left">EA SPORTS</div>
              <div className="col-md-1 text-right">
                <Checkbox
                  id="10"
                  checked={checked10}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
              <div className="col-md-2 text-left">Hublot</div>
              <div className="col-md-1 text-right">
                <Checkbox
                  id="11"
                  checked={checked11}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
              <div className="col-md-2 text-left">Nike</div>
              <div className="col-md-1"></div>
            </div>
            <div className="col-md-12">
              <div className="col-md-2"></div>
              <div className="col-md-1 text-right">
                <Checkbox
                  id="12"
                  checked={checked12}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
              <div className="col-md-2 text-left">Panini</div>
              <div className="col-md-1 text-right">
                <Checkbox
                  id="13"
                  checked={checked13}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              </div>
              <div className="col-md-2 text-left">Britain</div>
              <div className="col-md-1 text-right"></div>
              <div className="col-md-2 text-left"></div>
              <div className="col-md-1"></div>
            </div>

            <div className="col-md-12">
              <p className="text-justify">
                Our Privacy Policy sets out why the Premier League collects data
                from you and how it will be processed. You can manage your email
                preferences and change the information we send to you at any
                time by accessing your account and clicking 'Update Profile'.
              </p>
              <p className="text-justify">
                If you no longer wish to receive communications directly from
                the club(s) you support, you should contact the club(s) directly
                to inform them. More information on how to do this can be found
                on our Withdrawing consent from Clubs page.
              </p>
            </div>
            <div className="col-md-6">
              <Checkbox
                checked={agreechecked}
                onChange={handleAgreeChange}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              I have read and agree to the Terms & Conditions
            </div>
            <div className="col-md-12 status-padding3"></div>
            <div className="col-md-12">
              <Button
                onClick={() => history.push("/registerfav")}
                variant="contained"
                color="primary"
                style={{
                  marginLeft: "20px",
                  marginRight: "20px",
                  textAlign: "left",
                }}
              >
                <font style={{ textAlign: "left" }}>
                  <b>Back to choose your favorite</b>
                </font>
              </Button>
              <Button
                onClick={onSubmit}
                variant="contained"
                color="secondary"
                style={{ textAlign: "left", marginRight: "20px" }}
              >
                <font style={{ textAlign: "left" }}>
                  <b>Complete Registration</b>
                </font>
              </Button>

              <a href="#" class="fa fa-twitter"></a>
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-linkedin"></a>
              <a href="#" class="fa fa-flickr"></a>
            </div>
            <div
              className="col-md-12 col-sm-12"
              style={{ padding: "2%" }}
            ></div>
          </Card>
        </div>
      </form>
    </div>
  );
}


 
Register2.propTypes = {
   registerUser: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired,
   errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(
  withRouter(Register2)
);
