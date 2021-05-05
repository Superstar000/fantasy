import React from 'react';
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

function Socialbar(props){   

    return(
        <div className="col-md-12 col-sm-12" style={{padding:'0%'}}> 
        <card>
          <cardcontent>
          <div className="flex-container">
            <div>
               <a href=""><img src="/img/Sociallink/1.png" /><br/><br/><h6>LEAD PARTER</h6></a>
             </div>
             <div>
               <a href=""><img src="/img/Sociallink/2.png" /><br/> <br/><h6>OFFICAL BANK</h6></a>
             </div>
             <div>
               <a href=""><img src="/img/Sociallink/3.png" /><br/> <br/><h6>OFFICAL BEER</h6></a>
             </div>
             <div>
             <a href=""><img src="/img/Sociallink/4.png" /><br/> <br/><h6>OFFICAL SOFT DRINK</h6></a>
             </div>
             <div >
             <a href=""><img src="/img/Sociallink/5.png" /><br/> <br/><h6>OFFICAL TIMEKEEPER</h6></a>
             </div>
             <div>
             <a href=""><img src="/img/Sociallink/6.png" /><br/> <br/><h6>OFFICAL BALL</h6></a>
             </div>
             <div>
             <a href=""><img src="/img/Sociallink/7.png" /><br/> <br/><h6>OFFICAL LICENSEE</h6></a>
             </div>
             <div>
             <a href=""><img src="/img/Sociallink/8.png" /><br/> <br/><h6>OFFICAL LICENSEE</h6></a>
             </div>
           </div>
          </cardcontent>
        </card>   
        
    </div>
    )
}

export default Socialbar;