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
import Socialbar from './subcomponent/socialbar';


const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    paddingTop: "40px",
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
      //marginBottom: 'px'
      padding:'20px'
    },
    [theme.breakpoints.down('md')]: {
      //marginBottom: '28px'
    },
    
  },  
  reffirst1: {
    [theme.breakpoints.up('lg')]: {
      //marginBottom: 'px'
      color:'#ff2882'
    },
    [theme.breakpoints.down('md')]: {
      //marginBottom: '28px'
      color:'#ff2882'
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

// const Button = withStyles((theme) => ({
//   root: {
//     padding: '10px 40px',
//     fontSize: '1rem',
//     [theme.breakpoints.up('lg')]: {
//       padding: '10px 40px',
//     },
//     [theme.breakpoints.down('lg')]: {
//       padding: '4px 10px',
//     },
//     [theme.breakpoints.down('md')]: {
//       padding: '10px 30px',
//     },
//   }
// }))(MuiButton);

// const CardActions = withStyles((theme) => ({
//   root: {
//     padding: '10px',
//     [theme.breakpoints.up('lg')]: {
//       padding: '14px 25px',
//     },
//     [theme.breakpoints.down('md')]: {
//       padding: '15px 25px ',
//     },
//   }
// }))(MuiCardActions);

const typotitle={
  textAlign: "left",
  color: "#37003c"
}

export default function FantasyHome(props) {
  const classNamees = useStyles();
  const history = useHistory();
  const { data } = props;

  return (
    <div className={classNamees.container} id="buy-space">
     
      <div className="col-md-12 col-sm-12" style={{ padding: '70px 10% 20px' }}>    
         <h1 style={{color:"white",textAlign: 'left',fontFamily:'fantasy'}}> PREMIER LEAGUE CHARITABLE FUND </h1>
      </div>
      <div className="col-md-12 col-sm-12" style={{ padding: '0 10%' }}>  
          <Card style={{padding:'30px'}}>
            
               <CardContent>
                <Typography gutterBottom variant="h4" style={typotitle}>
               <b> The Premier League Charitable Fund creates and supports activities that inspire young people to achieve their potential and positively impact their communities.</b>
                <br/>
                </Typography>
                <Typography variant="h6" color="black"style={{textAlign:'left'}}>          
                Since the charity was formed in 2010, over 1.4 million young people have been involved in one of the programmes, festivals or community activities delivered through the community arm of Premier League and English Football League clubs in England and Wales.                 
                </Typography>               
              </CardContent>            
               <CardContent>
                <Typography gutterBottom variant="h5" style={typotitle}>
                <b> About us</b>
                <br/>
                </Typography>
                <Typography variant="h6" color="black"style={{textAlign:'left'}}>          
                The Premier League Communities strategy sets out its ambition to inspire and connect with local and global communities through football. The Premier League Charitable Fund (PLCF) was set up as an independent charity in 2010 to support the delivery of the strategy and it now distributes funding of around £35million a year from the Premier League and other partners.<div >&nbsp;</div>
                <h4><b>PThe PLCF aims to:</b></h4> <br/>
                - Build stronger communities where everyone can achieve<br/>
                - Enhance physical and mental wellbeing<br/>
                - Develop personal skills and positive relationships<br/>
                - Increase sporting, educational and employment opportunities<br/>
                </Typography>               
              </CardContent> 

               <CardContent>
                <Typography gutterBottom variant="h5" style={typotitle}>
                <b> What we do</b>
                  <br/>
                </Typography>
                <Typography variant="h6" color="black"style={{textAlign:'left'}}> 
                Using the appeal of the Premier League and professional football the Premier League Charitable Fund (PLCF) aims to create positive and lasting sporting, health and education outcomes for children, young people and the wider community. <br/>         
                The PLCF develops programmes and provides funding to 92+ Club Community Organisations (CCOs) in the Premier League and English Football League. We support CCOs to deliver innovative programmes and quality services and we invest in infrastructure and capability, training and advice.<br/>
                We monitor and report on the overall impact of the charity’s activity to demonstrate the value of football to communities and the value of the Premier League and our partner’s investment. <br/>
                Since 2010 over 1.4million young people and children have benefited from the PLCF’s events, festivals and national community and education programmes.<br/>
                </Typography>               
                </CardContent> 

                <CardContent>
                <Typography gutterBottom variant="h5" style={typotitle}>
                <b>Programmes</b>
                <br/>
                </Typography>
                <Typography variant="h6" color="black"style={{textAlign:'left'}}>          
                 Our programmes are designed to improve lives and communities through sports participation, education, social action, festivals, events and one-to-one support.<div >&nbsp;</div>
                 <h4><b>Premier League Kicks</b></h4><div>&nbsp;</div>
                 Premier League Kicks is a well-established community programme using the reach and appeal of the Premier League and network of professional football clubs to regularly engage children and young people of all backgrounds and abilities in football, sport and personal development – providing a trusted, positive influence in high-need areas across England and Wales.<div>&nbsp;</div>
                 see:<a style={{color:"red"}} href="#/dfs"> Premierll League Kicks</a> <div>&nbsp;</div>                               
                <h4><b> Premier League Primary Stars</b></h4><div>&nbsp;</div>            
                Since the charity was formed in 2010, over 1.4 million young people have been involved in one of the programmes, festivals or community activities delivered through the community arm of Premier League and English Football League clubs in England and Wales. <div >&nbsp;</div>    
                see:<a style={{color:"red"}} href="#/dfs">  Premier League Primary Stars</a><div>&nbsp;</div>             
                <h4><b> Premier League Inspires</b></h4><div>&nbsp;</div>
                Premier League Inspires is a joint programme between the Premier League, the Professional Footballers' Association (PFA) and the Prince’s Trust and uses the appeal of football to help children and young people aged 11-25 to fulfil their potential.<div>&nbsp;</div>
                see:<a style={{color:"red"}} href="#/dfs">  Premier League Inspires</a><div>&nbsp;</div>   
                <h4><b> Premier League and PFA Community Fund</b></h4><div>&nbsp;</div>
                The Premier League and PFA Community Fund enables CCOs to respond to local need and provides support to develop projects in partnership with others in new strategic areas. Funded projects engage with players and scholars to enhance the impact on participants.<div>&nbsp;</div>
                </Typography>
                </CardContent>

                <CardContent>
                <Typography gutterBottom variant="h5" style={typotitle}>
                <b>Governance</b>
                  <br/>
                </Typography>
                <Typography variant="h6" color="black"style={{textAlign:'left'}}> 
                The Premier League Charitable Fund is a registered charity No. 1137208.<div >&nbsp;</div>
                It is governed by a Board of Trustees with representatives from the Premier League, Professional Footballers Association and appointed independent Trustees.<div >&nbsp;</div>
                The PLCF Board is responsible for overseeing the management of the charity and ensuring it is carrying out its chartable purpose.<div >&nbsp;</div>
                The Trustees set the charity’s strategy which is delivered by the PLCF staff team. The Board meets up to four times a year.<div >&nbsp;</div>
                The PLCF’s annual reports and accounts are available for download below.<div >&nbsp;</div>
                </Typography>
                <div className="row" >
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2">
                      <div className="card">
                        <div className="card-body">
                          <h6 className="card-title" style={typotitle}>Annual Report and Accounts 2013/14</h6>
                          <p className="card-text">Published: 31 July 2014<br/>Size: 4.1MB<br/></p>
                          <a href="#">Download PDF</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="card">
                        <div className="card-body">
                          <h6 className="card-title" style={typotitle}>Annual Report and Accounts 2014/15</h6>
                          <p className="card-text">Published: 31 July 2015<br/>Size: 4.2MB<br/></p>
                          <a href="#">Download PDF</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="card">
                        <div className="card-body">
                          <h6 className="card-title" style={typotitle}>Annual Report and Accounts 2015/16</h6>
                          <p className="card-text">Published: 31 July 2016<br/>Size: 5.2MB<br/></p>
                          <a href="#">Download PDF</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="card">
                        <div className="card-body">
                          <h6 className="card-title" style={typotitle}>Annual Report and Accounts 2016/17</h6>
                          <p className="card-text">Published: 31 July 2017<br/>Size: 12.8MB<br/></p>
                          <a href="#">Download PDF</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="card">
                        <div className="card-body">
                          <h6 className="card-title" style={typotitle}>Annual Report and Accounts 2017/18</h6>
                          <p className="card-text">Published: 31 July 2018<br/>Size: 1.6MB<br/></p>
                          <a href="#">Download PDF</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-1"></div>
                  </div>
                </CardContent>           
            
         </Card>
      </div>
      <div className="col-md-12 col-sm-12"  style={{ padding: '3% 10%' }}>  
        <Card style={{backgroundColor:'white'}} >
                               
              <CardContent >
                <Typography gutterBottom variant="h5" style={typotitle}><b>The PLCF Board of Trustees</b><div>&nbsp;</div></Typography>
                <div className="row">
                  <div className="col-md-4 col-sm-4 ">
                     <img  src="/img/man/PLCF_TimGodwin.jpg" class="img-thumbnail" alt="PLCF_TimGodwin" width="100%" height="100%"/>   
                     <h5 style={{textAlign:'center'}}>Tim Godwin OBE QPM</h5> 
                  </div>
                  <div className="col-md-8 col-sm-8">
                      <Typography gutterBottom variant="h6" component="h2" style={{color:'black',textAlign: "left"}}>
                         Tim Godwin OBE QPM, Premier League Charitable Fund Chair (Managing Director, Accenture Police Services) 
                         <div >&nbsp;</div>
                      </Typography>
                      <Typography variant="h6" color="black"style={{textAlign:'left'}}>          
                      Tim has been Chair of the Premier League Charitable Fund since 2017.<br/> 

                      Tim is a former Deputy Commissioner for the London Metropolitan Police Service.<br/>

                      During his career at the Metropolitan Police Service, he held a number of senior roles. He was promoted to Deputy Assistant Commissioner in Territorial Policing in 2001 and to Assistant Commissioner in 2002.<br/>
  
                      In 2008, he was appointed Acting Deputy Commissioner of the Metropolitan Police and permanent Deputy Commissioner in July 2009.<br/>

                      Tim received the National Prize for Public Management Leadership from the UK Office for Public Management and was awarded the Order of the British Empire by her Majesty the Queen in 2003. In 2009, he received the Queen’s Policing Medal for his contribution to policing in the United Kingdom.<br/>

                      Tim is passionate about the power of sport for good, and the positive influence it can have on young people’s lives.<br/>                  
                      </Typography> 
                  </div>
                </div>
              </CardContent>
              <CardContent >
                <div className="row">
                  <div className="col-md-4 col-sm-4 ">
                     <img  src="/img/man/PLCF_BobbyBarnes.jpg" class="img-thumbnail" alt="PLCF_TimGodwin" width="100%" height="100%"/>   
                     <h5 style={{textAlign:'center'}}>Bobby Barnes</h5> 
                  </div>
                  <div className="col-md-8 col-sm-8">
                      <Typography gutterBottom variant="h6" component="h2" style={{color:'black',textAlign: "left"}}>
                        Bobby Barnes (Deputy Chief Executive, Professional Footballers Association) 
                        <div >&nbsp;</div>
                      </Typography>
                      <Typography variant="h6" color="black"style={{textAlign:'left'}}>          
                        Bobby has been a Trustee for the Premier League Charitable Fund since 2010.  Bobby was a professional footballer for 17 years playing for West Ham United, Northampton Town, Aldershot, Swindon Town, Bournemouth, Peterborough United, Partick Thistle and Hong Kong Rangers.<br/> 

                        Bobby joined the Professional Footballers' Association in 1999 and holds the position of Deputy Chief Executive. <br/> 

                        He is also President of FIFPro Division Europe, he sits on the FIFA Football Stakeholders Committee and the UEFA Professional Football Strategy Council.<br/> 

                        He was previously a trustee of the Franco British Council and was awarded an honorary Doctorate of Science by the University of East London in 2015. <br/>                  
                      </Typography> 
                  </div>
                </div>
              </CardContent>
              <CardContent >
                <div className="row">
                  <div className="col-md-4 col-sm-4 ">
                     <img  src="/img/man/PLCF_WilliamBush.jpg" class="img-thumbnail" alt="PLCF_TimGodwin" width="100%" height="100%"/>   
                     <h5 style={{textAlign:'center'}}>Bill Bush </h5> 
                  </div>
                  <div className="col-md-8 col-sm-8">
                      <Typography gutterBottom variant="h6" component="h2" style={{color:'black',textAlign: "left"}}>
                        Bill Bush (Executive Director, Premier League) 
                        <div >&nbsp;</div>
                      </Typography>
                      <Typography variant="h6" color="black"style={{textAlign:'left'}}>          
                        Bill has been a Trustee at the Premier League Charitable Fund since its inception in 2010.<br/>

                        Bill is Executive Director at the Premier League, where his responsibilities include intellectual property, public policy, relations with government and the EU, relations with fans and consumers, communications and the community programme.<br/> 

                        Before joining the Premier League, Bill worked as a Senior Advisor to the Prime Minister (1999-2001) and to the Department for Culture, Media and Sport (2001-2005), and was Head of Research for BBC News until 1999.<br/>       
                      </Typography> 
                  </div>
                </div>
              </CardContent>
              <CardContent >
                <div className="row">
                  <div className="col-md-4 col-sm-4 ">
                     <img  src="/img/man/PLCF_TomFinn.jpg" class="img-thumbnail" alt="PLCF_TimGodwin" width="100%" height="100%"/>   
                     <h5 style={{textAlign:'center'}}>Tom Finn</h5> 
                  </div>
                  <div className="col-md-8 col-sm-8">
                      <Typography gutterBottom variant="h6" component="h2" style={{color:'black',textAlign: "left"}}>
                      Tom Finn (Former Managing Director, Blackburn Rovers FC)
                      <div >&nbsp;</div>
                      </Typography>
                      <Typography variant="h6" color="black"style={{textAlign:'left'}}>          
                        Tom spent 15 years with Blackburn Rovers FC, joining as Club Secretary and became Managing Director in 2005 until his departure in 2011.<br/>

                        Among his achievements for the club was his role in Rovers’ academy – with many first team players now coming up through the academy ranks. Tom also led the club in active community engagement, cementing Rovers’ strong links with its local community. <br/>

                        Prior to Blackburn Rovers, Tom held roles at Wolverhampton Wanderers FC, West Ham United FC and Oldham Athletic FC. <br/>  

                        Tom has been a Premier League Charitable Fund Trustee since 2010. He is a Trustee of the Football League Pension & Life Assurance Scheme and is currently a Judicial Panel Member for the FA and a member of the Premier League Panel. He studied in Manchester and received his MBA from the Open University.<br/> 

                        Tom is the Chair the Premier League Charitable Fund’s Audit and Risk Committee. <br/>                  
                      </Typography> 
                  </div>
                </div>
              </CardContent>
              <CardContent >
                <div className="row">
                  <div className="col-md-4 col-sm-4 ">
                     <img  src="/img/man/PLCF_GailScottSpicer.jpg" class="img-thumbnail" alt="PLCF_TimGodwin" width="100%" height="100%"/>   
                     <h5 style={{textAlign:'center'}}>Gail Scott-Spicer</h5> 
                  </div>
                  <div className="col-md-8 col-sm-8">
                      <Typography gutterBottom variant="h6" component="h2" style={{color:'black',textAlign: "left"}}>
                      Gail Scott-Spicer (Chief Executive Officer, King’s College Hospital Charity) 
                      <div >&nbsp;</div>
                      </Typography>
                      <Typography variant="h6" color="black"style={{textAlign:'left'}}>          
                        Gail has been a Trustee at the Premier League Charitable Fund since 2017.<br/> 

                        She is a specialist in service provision to children and young people and understands the complex issues children and young people face. <br/> 

                        She is experienced in Social Impact and is the charity lead Trustee in this area.<br/> 

                        She is CEO of King’s College Hospital Charity, was previously CEO of the Dame Kelly Holmes Trust and CEO of the Carers Trust and is currently the Vice-Chair for the Money Advice Trust.<br/> 

                        Gail has a passion for Arsenal FC and walks in Epping Forest.<br/>                  
                      </Typography> 
                  </div>
                </div>
              </CardContent>
              <CardContent >
                <div className="row">
                  <div className="col-md-4 col-sm-4 ">
                     <img  src="/img/man/PLCF_ChrisDavies.jpg" class="img-thumbnail" alt="PLCF_TimGodwin" width="100%" height="100%"/>   
                     <h5 style={{textAlign:'center'}}>Christine Davis CBE</h5> 
                  </div>
                  <div className="col-md-8 col-sm-8">
                      <Typography gutterBottom variant="h6" component="h2" style={{color:'black',textAlign: "left"}}>
                      Christine Davies CBE (Specialist Advisor on Children and Young People’s Services)  
                      <div >&nbsp;</div>
                      </Typography>
                      <Typography variant="h6" color="black"style={{textAlign:'left'}}>          
                        Chris is the former Chief Executive of C4EO (Centre for Excellence and Outcomes in Children and Young People’s Services).  She has been a Trustee at the Premier League Charitable Fund since 2017. Chris is the charity lead Trustee for safeguarding and is a member of the Audit and Risk Committee.<br/>  

                        She was formerly the Director of Children’s Services, Telford & Wrekin Council (1997–2007) and was the President of the National Association of Chief Education Officers.<br/>  

                        Previously a teacher, psychologist and Director of Education, Christine has advised the British Government and other countries on education, child poverty, safeguarding and early intervention. She has been an adviser to the LGA Children and Young People’s Board and supported the development of leadership training for Directors of Children’s Services.<br/>  

                        Christine is currently a member of the Youth Justice Board for England and Wales; sits on the Advisory Board for the Office of the Children’s Commissioner and chairs two Local Authority Children’s Improvement Boards.<br/>                  
                      </Typography> 
                  </div>
                </div>
              </CardContent>
            
          </Card>
      </div>
      <div className="col-md-12 col-sm-12" style={{ padding: '0 10%' }}>  
          <Card style={{padding:'30px'}}>
            
              <CardContent>
              <Typography gutterBottom variant="h5" style={typotitle}><b>Safeguarding</b><div>&nbsp;</div></Typography>
              <Typography gutterBottom variant="h6" component="h2" style={{color:'black',textAlign: "left"}}>
                  Getting advice or raising a concern
               </Typography><div >&nbsp;</div>
               <Typography variant="h6" color="black"style={{textAlign:'left'}}>
                  The Premier League and Premier League Charitable Fund have safeguarding policies and procedures in place that govern their own activities, as well as rules and requirements that govern Club and Club Community Organisation safeguarding arrangements.<br/> 

                  Our Safeguarding Team can be contacted by emailing safeguarding@plcf.co.uk or by calling 0207 864 9000 for advice, to raise a concern or to help you get in touch with your Club’s Safeguarding Team.<br/> 

                  Learn more about the Premier League safeguarding commitment <a href="premierleague.com/safeguarding"></a> <br/>  
                </Typography>            
              </CardContent> 
              <CardContent>
                <Typography gutterBottom variant="h5" style={typotitle}>
                <b> Contact us </b>
                  <br/>
                </Typography><div >&nbsp;</div>
                <Typography variant="h6" color="black"style={{textAlign:'left'}}> 
                  Here is how you can get in touch with the Premier League Charitable Fund<br/>

                  <b>Send an email:</b> <a href='mailbox@plcf.co.uk'></a><br/>

                  <b>Give us a call:</b> 0207 864 9000<br/>

                  <b>Write to us:</b> The Premier League Charitable Fund, Brunel Building, 57 North Wharf Road, London, W2 1HQ<br/>
                </Typography>               
                </CardContent> 
              <CardContent>
                <Typography gutterBottom variant="h5" style={typotitle}>
                <b>Funding requests</b>
                <br/>
                </Typography>
                <Typography variant="h6" color="black"style={{textAlign:'left'}}>          
                The Premier League Charitable Fund provides grants to the charitable arms of professional football clubs in England and Wales. Please note that applications for funding are by invitation only, we do not accept unsolicited funding requests.<div>&nbsp;</div>
                </Typography>
                </CardContent>
             
          </Card>
      </div>
      <div className="col-md-12 col-sm-12"  style={{ padding: '5% 10%' }}>  
        <Socialbar/>
      </div>
    </div>  
    )
}
