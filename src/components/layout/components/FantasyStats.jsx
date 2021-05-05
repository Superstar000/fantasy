import React from 'react';
import { useHistory } from "react-router-dom";

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
import Socialbar from './subcomponent/socialbar';
import main from './../../../img/background/main.png';

const columns = [
  { id: 'name', label: '!', minWidth: 170 },
  { id: 'code', label: 'Players', minWidth: 100 },
  {
    id: 'population',
    label: 'Cost',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Sel.',
    minWidth: 70,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Form',
    minWidth: 70,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'pts',
    label: 'Pts',
    minWidth: 70,
    align: 'right',
    format: (value) => value.toFixed(2),
  }
];

function createData(name, code, population, size,pts) {
  const density = population / size;
  return { name, code, population, size, density,pts };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263,12),
  createData('China', 'CN', 1403500365, 9596961,12),
  createData('Italy', 'IT', 60483973, 301340,12),
  createData('United States', 'US', 327167434, 9833520,123),
  createData('Canada', 'CA', 37602103, 9984670,123),
  createData('Australia', 'AU', 25475400, 7692024,12312),
  createData('Germany', 'DE', 83019200, 357578,12312),
  createData('Ireland', 'IE', 4857000, 70273,123),
  createData('Mexico', 'MX', 126577691, 1972550,12312),
  createData('Japan', 'JP', 126317000, 377973,12312),
  createData('France', 'FR', 67022000, 640679,123),
  createData('United Kingdom', 'GB', 67545757, 242495,1231),
  createData('Russia', 'RU', 146793744, 17098246,12312),
  createData('Nigeria', 'NG', 200962417, 923768,12312),
  createData('Brazil', 'BR', 210147125, 8515767,123),
];

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  container: {
    textAlign: "center",
    backgroundImage: `url(${main})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    width: '100%',
    height: 'auto'

  },
  txtAlign: {
    textAlign: "left"
  },
  root: {
    display: "inline-block",
    border: "1px solid #E336FF",
    // margin: '30px',
    // [theme.breakpoints.up('md')]: {
    //   margin: "30px",
    // },
    // [theme.breakpoints.up('lg')]: {
    //   margin: "30px",
    // },
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
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  }
}));

const theme = createMuiTheme({
  palette: {
    primary: purple,
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

export default function FantasyStats(props) {
  const classes = useStyles();
  const history = useHistory();
  const { data } = props;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [age, setAge] = React.useState('');

  const handleChangeage = (event) => {
    setAge(event.target.value);
  };


  return (
    <div className={classes.container} id="buy-space">
      <h2 style={{color:"white",textAlign: 'left',paddingLeft:'100px'}}>Fantasy</h2>
      <div  className="col-md-12 col-sm-12"  style={{ padding: '0 5%' }}>  
        <div className="col-md-9 col-sm-9 fantasystats_res">
          <Card >
            <CardActionArea>
           
              <CardContent className={classes.reffirst}>
                <div className="row">
                <div className="col-md-6"> 
                <Typography gutterBottom variant="h5" component="h2" style={{textAlign: "left"}}>
                 Statistics
                </Typography>
                </div>
                <div className="col-md-6">
                  <FormControl className={classes.formControl}>
                   <InputLabel id="demo-simple-select-label">View All Players</InputLabel>
                   <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     value={age}
                     onChange={handleChangeage}
                   >
                     <MenuItem value={10}>Ten</MenuItem>
                     <MenuItem value={20}>Twenty</MenuItem>
                     <MenuItem value={30}>Thirty</MenuItem>
                   </Select>                
                  </FormControl>
                  <FormControl className={classes.formControl}>
                   <InputLabel id="demo-simple-select-label">Sorted By Price</InputLabel>
                   <Select
                     labelId="demo-simple-select-label"
                     id="demo-simple-select"
                     value={age}
                     onChange={handleChangeage}
                   >
                     <MenuItem value={10}>Ten</MenuItem>
                     <MenuItem value={20}>Twenty</MenuItem>
                     <MenuItem value={30}>Thirty</MenuItem>
                   </Select>                
                  </FormControl>
                 </div>
                 </div>
                <div style={{backgroundColor:"#953bff",marginBottom:'5px',color:'white'}}>
                  Total points earned this session.
                </div>
              
                  <Paper className={classes.root}>
                    <TableContainer className={classes.container}>
                      <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                          <TableRow>
                            {columns.map((column) => (
                              <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                              >
                                {column.label}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                              <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                {columns.map((column) => {
                                  const value = row[column.id];
                                  return (
                                    <TableCell key={column.id} align={column.align}>
                                      {column.format && typeof value === 'number' ? column.format(value) : value}
                                    </TableCell>
                                  );
                                })}
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <TablePagination
                      rowsPerPageOptions={[10, 25, 100]}
                      component="div"
                      count={rows.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                  </Paper>
                </CardContent>
              </CardActionArea>
          </Card>

        </div>
        <div className="col-md-3 col-sm-3 fantasystats_res">          
          <Card className={classes.root}>         
            <CardActionArea>
              <ThemeProvider theme={theme}>
              <Button fullWidth variant="contained" color="primary" className={classes.margin}>
                <font style={{textAlign:"left",color:"white"}}><b>LATEST</b></font>
              </Button>
              </ThemeProvider>             
              <CardContent>  
              <div className="row fantansystats">
                <div className="col-md-3 col-sm-3">
                   <img width="100%" height="100%" 
                    src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg"
                    title="Contemplative Reptile"
                    /> 
                </div>
                <div className="col-md-6 col-sm-3">
                    <div style={{fontSize:'10px'}}>
                      Fantansy Premier League
                    </div>
                    <div style={{fontSize:'8px'}}>
                      Fantansy Premier League
                      <br/>
                      Fantansy Premier League
                    </div>
                    <hr/>
                </div>
                </div>
                <div className="row fantansystats">
                <div className="col-md-3 col-sm-3">
                   <img width="100%" height="100%" 
                    src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg"
                    title="Contemplative Reptile"
                    /> 
                </div>
                <div className="col-md-6 col-sm-3">
                    <div style={{fontSize:'10px'}}>
                      Fantansy Premier League
                    </div>
                    <div style={{fontSize:'8px'}}>
                      Fantansy Premier League
                      <br/>
                      Fantansy Premier League
                    </div>
                    <hr/>
                </div>
                </div>
                <div className="row fantansystats">
                <div className="col-md-3 col-sm-3">
                   <img width="100%" height="100%" 
                    src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg"
                    title="Contemplative Reptile"
                    /> 
                </div>
                <div className="col-md-6 col-sm-3">
                    <div style={{fontSize:'10px'}}>
                      Fantansy Premier League
                    </div>
                    <div style={{fontSize:'8px'}}>
                      Fantansy Premier League
                      <br/>
                      Fantansy Premier League
                    </div>
                    <hr/>
                </div>
                </div>
                <div className="row fantansystats">
                <div className="col-md-3 col-sm-3">
                   <img width="100%" height="100%" 
                    src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg"
                    title="Contemplative Reptile"
                    /> 
                </div>
                <div className="col-md-6 col-som-3">
                    <div style={{fontSize:'10px'}}>
                      Fantansy Premier League
                    </div>
                    <div style={{fontSize:'8px'}}>
                      Fantansy Premier League
                      <br/>
                      Fantansy Premier League
                    </div>
                    <hr/>
                </div>
                </div>
                <div className="row fantansystats">
                <div className="col-md-3 col-sm-3">
                   <img width="100%" height="100%" 
                    src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg"
                    title="Contemplative Reptile"
                    /> 
                </div>
                <div className="col-md-6 col-sm-3">
                    <div style={{fontSize:'10px'}}>
                      Fantansy Premier League
                    </div>
                    <div style={{fontSize:'8px'}}>
                      Fantansy Premier League
                      <br/>
                      Fantansy Premier League
                    </div>
                    <hr/>
                </div>
                </div>
                <div className="row fantansystats">
                <div className="col-md-3 col-sm-3">
                   <img width="100%" height="100%" 
                    src="/Jean-Philippe-Mateta-Crystal-Palace-home1.jpg"
                    title="Contemplative Reptile"
                    /> 
                </div>
                <div className="col-md-6 col-sm-3">
                    <div style={{fontSize:'10px'}}>
                      Fantansy Premier League
                    </div>
                    <div style={{fontSize:'8px'}}>
                      Fantansy Premier League
                      <br/>
                      Fantansy Premier League
                    </div>
                    <hr/>
                </div>
                </div>
              </CardContent>              
            </CardActionArea>
           </Card>         
        </div>
         
      </div>
      <div  className="col-md-12 col-sm-12"  style={{ padding: '5%' }}>  
            <Socialbar/>
      </div>
    </div>
  );
}
