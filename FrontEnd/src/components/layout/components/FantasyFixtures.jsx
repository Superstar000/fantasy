import React, { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { Box } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import MuiCardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import MuiButton from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';
import Fixtures from './subcomponent/Fixtures';
import Fdr from './subcomponent/Fdr';
import Socialbar from './subcomponent/socialbar';


const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    paddingTop: "20px",
    paddingBottom: "30px"
  },
  txtAlign: {
    textAlign: "left"
  },
  root: {
    display: "inline-block",
    border: "1px solid #E336FF",
    [theme.breakpoints.down('sm')]: {
      marginBottom: '20px',
      marginRight: 0,
      marginLeft: 0
    },
  },
  title: {
    fontFamily: "initial",
    marginBottom: "60px"
  },
  reffirst: {
    [theme.breakpoints.up('lg')]: {
      marginBottom: '58px'
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: '28px'
    },
  },

  minH: {
    [theme.breakpoints.up('md')]: {
      minHeight: '270px'
    },
    [theme.breakpoints.up('lg')]: {
      minHeight: '270px'
    },
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const Button = withStyles((theme) => ({
  root: {
    padding: '10px 40px',
    fontSize: '1rem',
    [theme.breakpoints.up('lg')]: {
      padding: '10px 40px',
    },
    [theme.breakpoints.down('lg')]: {
      padding: '4px 10px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '10px 30px',
    },
  }
}))(MuiButton);

const CardActions = withStyles((theme) => ({
  root: {
    padding: '10px',
    [theme.breakpoints.up('lg')]: {
      padding: '14px 25px',
    },
    [theme.breakpoints.down('md')]: {
      padding: '15px 25px ',
    },
  }
}))(MuiCardActions);

export default function FantasyHome(props) {
  const classes = useStyles();
  const history = useHistory();
  const { data } = props;
  const [fixview, setfixview] = useState(false);
  const handleview = (e) => {
    const fixview1 = !fixview;
    setfixview(fixview1);
  };
  return (
    <div className={classes.container} >

      <div>&emsp;</div>
      <Button
        style={{
          marginLeft: "20px",
          marginRight: "20px",
          textAlign: "left",
          backgroundColor: "#8FD0BA",
          borderRadius: "30px",
        }}
        onClick={handleview}
      >
        <div className={fixview ? "pickteam-toggle-on" : ""}>
          {" "}
                    Fixture&nbsp;
                  </div>
        <div className={!fixview ? "pickteam-toggle-off" : ""}>
          {" "}
                    &nbsp;&nbsp;&nbsp;&nbsp; FDR&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
      </Button>
      
      <div className="col-md-12 col-sm-12" style={{ padding: '2% 10%' }}>
        {fixview ? <Fixtures /> : <Fdr />}
      </div>
      
    </div>
  );
}
