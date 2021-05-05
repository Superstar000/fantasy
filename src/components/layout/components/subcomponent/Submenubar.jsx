import React, {useState, useEffect} from 'react';
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
import Submenubar_bar from './Submenubar_bar';

function Submenubar(props){    
  const [menuFlag, setMenuFlag] = useState(true);
    const handleClose = () => {
        //setAnchorEl(null);
        //if (props && props.onClick) {
            props.onMouseOut();
        //}
    };    
    const onMenuBar1 = (e)=>{
      //e.preventDefault();
      setMenuFlag(0);
  }
    
      
    return(
        <div className="col-md-12 col-sm-12">    
                <div className="col-md-2 col-sm-3"></div>
                <div className="col-md-1 col-sm-3">
                <a className="btn-flat menu3" href=""><span>Home</span></a>
                </div>
                <div className="col-md-1 col-sm-3">
                <a className="btn-flat menu3" href="#/fantasyprizes">Prize</a>
                </div>
                <div className="col-md-1 col-sm-3">
                <a className="btn-flat menu3" href="#/fantasyscouts" onMouseOver={(e) => {    
                e.preventDefault();setMenuFlag(1)                          
              }}>Scout</a>
                </div>
                <div className="col-md-1 col-sm-3">
                <a className="btn-flat menu3" href="#/podcast">Podcast</a>
                </div>
                <div className="col-md-1 col-sm-3">
                <a className="btn-flat menu3" href="#/help">Help</a>
                </div>
                <div className="col-md-1 col-sm-3">
                <a className="btn-flat menu3" href="#/fantasystats">Statistics</a>
                </div>
                <div className="col-md-1 col-sm-3">
                <a className="btn-flat menu3" href="#/fantasydraft">Draft</a>
                </div>
                <div className="col-md-3 col-sm-3"></div>
                {/* {menuFlag!=0?<Submenubar_bar barstate={menuFlag} onMouseOut={onMenuBar1}/>:""}              */}

    </div>
    )
}

export default Submenubar;