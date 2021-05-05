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
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextField from "@material-ui/core/TextField";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    paddingTop: "20px",
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



function Register(props) {
  const classes = useStyles();
  const history = useHistory();
  const { data, auth } = props;

  const prefix_mobile = [{ code: "Code" }, { code: "1" }, { code: "+20" }];
  const prefix_region = [
    { region: "Select a country" },
    { region: "England" },
    { region: "Northen Irlend" },
  ];
  const prefix_day = [{ day: "Select a day" }, { day: "1" }, { day: "2" },{day:"3"},
  {day:"4"},{day:"5"},{day:"6"},{day:"7"},{day:"8"},{day:"9"},{day:"10"},{day:"11"},{day:"12"},{day:"13"},{day:"14"},{day:"15"}
,{day:"16"},{day:"17"},{day:"18"},{day:"19"},{day:"20"},{day:"21"},{day:"22"}
,{day:"23"},{day:"24"},{day:"25"},{day:"26"},{day:"27"},{day:"28"},{day:"29"},{day:"30"}
,{day:"31"}];
  const prefix_month = [
    { month: "Select a month" },
    { month: "1" },
    { month: "2" },
    { month: "3" },
    { month: "4" },
    { month: "5" },
    { month: "6" },
    { month: "7" },
    { month: "8" },
    { month: "9" },
    { month: "10" },
    { month: "11" },
    { month: "12" }
  ];
  const prefix_year = [
    { year: "Select year" },
    { year: "1960" },
    { year: "1961" },
  ];
  const prefix_gender = [
    { sex: "Male" },
    { sex: "Female" },
    { sex: "Unspecified" },
  ];

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState(0);
  const [birthday, setBirthDay] = useState("");
  const [birthmonth, setBirthMonth] = useState("");
  const [birthyear, setBirthYear] = useState("");
  const [region, setRegion] = useState("");
  const [mobile, setMobile] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const [errors, setErrors] = useState("");

  useEffect(() => {});

  const onFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const onLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const onGenderChange = (e) => {
    setGender(e.target.selectedIndex);
  };
  const onBirthDayChange = (e) => {
    setBirthDay(e.target.value);
  };
  const onBirthMonthChange = (e) => {
    setBirthMonth(e.target.value);
  };
  const onBirthYearChange = (e) => {
    setBirthYear(e.target.value);
  };

  const onRegionChange = (e) => {
    setRegion(e.target.value);
  };
  const onMobileChange = (e) => {
    setMobile(e.target.value);
  };
  const onMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      firstname == "" &&
      lastname == "" &&
      password == "" &&
      gender == "" &&
      birthday == "" &&
      mobilenumber == "" &&
      mobile == "" &&
      region == ""
    ) {
      toast.success("Fill this field please", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    const userData = {
      first_name: firstname,
      last_name: lastname,
      email: email,
      password: password,
      gender: gender,
      birthday: birthmonth + "-" + birthday + "-" + birthyear,
      country: region,
      post_code: mobile,
      phone: mobilenumber,
    };
    props.registerUser(userData, history, 1);
  };

  return (
    <div>
      <ToastContainer closeOnClick={true} closeButton={false} />
      <form noValidate onSubmit={onSubmit}>
        <div className="col-md-12 col-sm-12" style={{ padding: "5% 10%" }}>
          <Card style={{padding: '30px'}}>
            <CardContent>
              <Typography gutterBottom variant="h4" component="h2" style={{ textAlign: "center",color:'#37003c' }}>
                WELCOME Your Personal Details
                <br />
              </Typography>
            </CardContent>

            <div className="col-md-12 col-sm-12 status-padding">
              <div className="col-md-3">First Name</div>
              <div className="col-md-6">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  onChange={onFirstNameChange}
                  label="First Name"
                  variant="outlined"
                />
              </div>

              <div className="col-md-3"></div>
            </div>
            <div className="col-md-12 col-sm-12 status-padding">
              <div className="col-md-3">Last Name</div>
              <div className="col-md-6">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  onChange={onLastNameChange}
                  label="Last Name"
                  variant="outlined"
                />
              </div>

              <div className="col-md-3 col-sm-12 status-padding"></div>
            </div>
            <div className="col-md-12">
              <div className="col-md-3">Eamil Address</div>
              <div className="col-md-6">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  onChange={onEmailChange}
                  label="Email Address"
                  variant="outlined"
                />
              </div>

              <div className="col-md-3"></div>
            </div>
            <div className="col-md-12 col-sm-12 status-padding">
              <div className="col-md-3">Password</div>
              <div className="col-md-6">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  onChange={onPasswordChange}
                  label="Password"
                  variant="outlined"
                />
              </div>

              <div className="col-md-3"></div>
            </div>
            <div className="col-md-12 col-sm-12 status-padding">
              <div className="col-md-3">Gender</div>
              <div className="col-md-6">
                <select onChange={onGenderChange} class="minimal">
                  {prefix_gender.map((row, index) => (
                    <option id={index}>{row.sex}</option>
                  ))}
                </select>
              </div>

              <div className="col-md-3"></div>
            </div>
            <div className="col-md-12 col-sm-12 status-padding">
              <div className="col-md-3">Date of Birth</div>
              <div className="col-md-6">
                <select
                  onChange={onBirthDayChange}
                  class="minimal status-padding"
                >
                  {prefix_day.map((row) => (
                    <option>{row.day}</option>
                  ))}
                </select>
                <select
                  onChange={onBirthMonthChange}
                  class="minimal status-padding"
                >
                  {prefix_month.map((row) => (
                    <option>{row.month}</option>
                  ))}
                </select>
                <select
                  onChange={onBirthYearChange}
                  class="minimal status-padding"
                >
                  {prefix_year.map((row) => (
                    <option>{row.year}</option>
                  ))}
                </select>
              </div>

              <div className="col-md-3"></div>
            </div>
            <div className="col-md-12 col-sm-12">
              <div className="col-md-3">Country/Region of Residence</div>
              <div className="col-md-6">
                {/* onChange={this.onChange}
                  value={this.state.email} */}
                <select onChange={onRegionChange} class="minimal">
                  {prefix_region.map((row) => (
                    <option>{row.region}</option>
                  ))}
                </select>
              </div>

              <div className="col-md-3"></div>
            </div>
            <div className="col-md-12 col-sm-12 status-padding">
              <div className="col-md-3">Mobile Number</div>
              <div className="col-md-2">
                <select onChange={onMobileChange} class="minimal">
                  {prefix_mobile.map((row) => (
                    <option>{row.code}</option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  type="text"
                  onChange={onMobileNumberChange}
                  label="Mobile Number"
                  variant="outlined"
                />
              </div>

              <div className="col-md-3"></div>
            </div>
            <div className="col-md-12 col-sm-12 status-padding">
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
            <div className="status-padding3">&nbsp;</div>
          </Card>
        </div>
      </form>
      {/* <div  className="col-md-12 col-sm-12"  style={{ padding: '10%' }}>  
        <Socialbar/>
      </div> */}
    </div>
  );
}
 
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.adminAuth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
