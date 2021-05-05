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
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

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

function Login(props) {
  const classes = useStyles();
  const history = useHistory();
  const { auth, errors } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");

  useEffect(() => {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (auth.isAuthenticated) {
      history.push("/fantasy");
      props.history.push("/fantasy");
    }
    console.log(errors);
    console.log(auth);
  });
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = (e) => {
    if(email==''&&password==''){
      toast.success("Please fill this field", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    props.loginUser(userData);
    if (errors.msg) {
      toast.success(errors.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
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
                {auth.isAuthenticated ? "WELCOME To Log In" : "Please Log In"}
                <br />
              </Typography>
            </CardContent>
            {}
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  type="email"
                  onChange={onEmailChange}
                  label="Email"
                  variant="outlined"
                />
              </div>

              <div className="col-md-3"></div>
            </div>
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  type="password"
                  onChange={onPasswordChange}
                  label="Password"
                  variant="outlined"
                />
              </div>

              <div className="col-md-3"></div>
            </div>
            <div className="col-md-12">
              <Button
                onClick={() => history.push("/register")}
                variant="contained"
                color="secondary"
                style={{ textAlign: "left", marginRight: "20px" }}
              >
                <font style={{ textAlign: "left" }}>
                  <b>SIGN UP NOW</b>
                </font>
              </Button>

              <Button
                onClick={onSubmit}
                variant="contained"
                color="primary"
                style={{
                  marginLeft: "20px",
                  marginRight: "20px",
                  textAlign: "left",
                }}
              >
                <font style={{ textAlign: "left" }}>
                  <b>LOG IN</b>
                </font>
              </Button>
              <a href="#" className="fa fa-twitter"></a>
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-linkedin"></a>
              <a href="#" classNam="fa fa-flickr"></a>
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
// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });

// export default connect(
//   mapStateToProps,
//   {}
// )(withRouter(CreateArticle1));

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
