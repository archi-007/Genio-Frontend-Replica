import React from 'react'
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar.js';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import  './App.css';
import { Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Footer from './Footer.js';
import Divider from '@material-ui/core/Divider';
import Slider from './Slider.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkIcon from '@material-ui/icons/Link';
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root:{
    flexGrow:1,
    backgroundColor:"#F7F9F9",
  },
  main:{
    marginLeft:"10%",
    marginTop:"50px",
    [theme.breakpoints.down('sm')]:{
      marginLeft:"8%",
      marginRight:"6%",
    },
    [theme.breakpoints.down('xs')]:{
      width:"100%",
      marginLeft:"5%",
      marginRight:"5%",
    },
  },
  profile:{
    height:"auto",
    marginBottom:"20px",
    paddingTop:"40px",
    paddingBottom:"40px",
    paddingLeft:"30px",
    paddingRight:"30px",
    [theme.breakpoints.down('xs')]:{
      padding:"0",
    },
  },
  about:{
    height:"auto",
    marginBottom:"20px",
    padding:"15px",
    paddingLeft:"20px",
    paddingBottom:"20px"
  },
  certificates:{
    height:"auto",
    marginBottom:"20px",
    padding:"15px",
    paddingLeft:"20px",
    paddingBottom:"20px"
  },
  assignments:{
    height:"auto",
    marginBottom:"60px",
    padding:"15px",
    paddingLeft:"20px",
    paddingBottom:"20px"
  },
  share:{
    marginTop:"50px",
    marginLeft:"40px",
    width:"20%",
    marginRight:"12%",
    minWidth:"280px !important",
    [theme.breakpoints.down('md')]:{
      marginRight:"5%",
    },
    [theme.breakpoints.down('sm')]:{
      marginLeft:"9%",
      marginRight:"7%",
      width:"100%",
      marginTop:-40,
      marginBottom:20
    },
    [theme.breakpoints.down('xs')]:{
      width:"100%",
      marginLeft:"5%",
      marginRight:"5%",
      marginTop:-40,
      marginBottom:20
    },
  },
  connections:{
    marginTop:"50px",
    marginLeft:"40px",
    width:"20%",
    marginRight:"12%",
    minWidth:"280px !important",
    [theme.breakpoints.down('md')]:{
      marginRight:"5%",
    },
    [theme.breakpoints.down('sm')]:{
      marginLeft:"9%",
      marginRight:"7%",
      width:"100%",
      marginTop:-40,
      marginBottom:20
    },
    [theme.breakpoints.down('xs')]:{
      width:"100%",
      marginLeft:"5%",
      marginRight:"5%",
      marginTop:-40,
      marginBottom:20
    },
  },
  image:{
    width:theme.spacing(20),
    height:theme.spacing(20),
    borderRadius:"100%",
    marginLeft:30,
    marginTop:30,
    [theme.breakpoints.down('xs')]:{
      width:theme.spacing(15),
      height:theme.spacing(15),
      marginLeft:10,
    }
  },
  follow_btn: {
    margin: theme.spacing(1),
    color:"#2789E1",
    marginLeft:"35px",
    [theme.breakpoints.down("xs")]:{
      marginLeft:"15px",
    }
  },
  follow_item:{
    width:"70%",
    [theme.breakpoints.down("xs")]:{
      width:"100%",
    }
  },
  follow_container:{
    flexGrow:1,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    [theme.breakpoints.down("xs")]:{
      height:"auto",
      alignItems:"flex-start"
    }
  },
  userName:{
    [theme.breakpoints.down("xs")]:{
      paddingLeft:"15px",
    }
  },
  intro:{
    margin:10,
    flexDirection:"column",
    paddingRight:""
  },
  info_par_cont:{
    flexDirection:"row",
    marginTop:"20px",
    [theme.breakpoints.down("xs")]:{
      flexDirection:"column",
      marginTop:"10px",
    }
  },
  info_item1:{
    width:"50%",
    [theme.breakpoints.down("xs")]:{
      width:"100%",
    }
  },
  info_item2:{
    width:"50%",
    [theme.breakpoints.down("xs")]:{
      width:"100%",
    }
  },
  info1:{
    flexWrap:"wrap",
    justifyContent:"space-between",
    [theme.breakpoints.down("xs")]:{
      flexDirection:"row",
      padding: "0px 15px 15px 15px",
    }
  },
  info2:{
    flexWrap:"wrap",
    justifyContent:"space-between",
    [theme.breakpoints.down("xs")]:{
      flexDirection:"row",
      padding: "0px 15px 15px 15px",
    }
  },
  root1: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  hide:{
    [theme.breakpoints.down('sm')]:{
      display:"none",
    }
  }
  
}));

const App = () =>{
  const classes = useStyles();
  return(
    <div>
      <NavBar/>
      <Grid container direction = {"row"}  className = {classes.root}>
        <Grid item  xs = {11} sm = {10} md = {6} lg = {6} direction = {"column"} className = {classes.main}>

          <Grid item>
            <Paper className = {classes.profile}>
              <Grid container>
                <Grid container item style = {{"flexGrow":1}}>
                  <Grid item style = {{"width":"30%"}}>
                    <img alt = "Akshat" src = "/assets/images/myimg.jpeg" className = {classes.image}></img>
                  </Grid>

                  <Grid item className = {classes.follow_item}>
                    <Grid container className = {classes.follow_container}>
                        <Typography variant = "h5" style = {{"color":"#2789E1","font-weight":"600"}} className = {classes.userName}>Akshat Singh Rathore</Typography>
                        <Button variant="outlined" size="medium" className={classes.follow_btn}>Follow</Button>
                    </Grid>
                  </Grid>
                </Grid>
                
                <Grid container item wrap="nowrap" zeroMinWidth className = {classes.intro}>
                  <Grid item>
                    <Typography style={{'overflowWrap': 'break-word',"paddingRight":"30px"}}>
                        Hey there!
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography style={{'overflowWrap': 'break-word',"paddingRight":"30px"}}>
                        From Kolkata,India.
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing = {2} className = {classes.info_par_cont}>
                  <Grid item className = {classes.info_item1}>
                    <Grid container direction = "row" spacing = {2} className = {classes.info1}>
                      <Grid item>
                        <Grid container style = {{"flexDirection":"column","alignItems":"center","padding ":" 10px"}}>
                          <Typography variant = "h7" style = {{"color":"#2789E1"}}>500</Typography>
                          <Typography variant = "h6" style = {{"color":"#2789E1"}}>Likes</Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid container style = {{"flexDirection":"column","alignItems":"center","padding ":" 10px"}}>
                          <Typography variant = "h7" style = {{"color":"#2789E1"}}>500</Typography>
                          <Typography variant = "h6" style = {{"color":"#2789E1"}}>Followers</Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid container style = {{"flexDirection":"column","alignItems":"center","padding ":" 10px"}}>
                          <Typography variant = "h7" style = {{"color":"#2789E1"}}>500</Typography>
                          <Typography variant = "h6" style = {{"color":"#2789E1"}}>Following</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item className = {classes.info_item2}>
                    <Grid container direction = "row" spacing = {2} className = {classes.info1} style = {{"justifyContent":"space-evenly"}}>
                      <Grid item>
                        <Grid container style = {{"flexDirection":"column","alignItems":"center","padding ":" 10px"}}>
                          <Typography variant = "h7" style = {{"color":"#2789E1"}}>500</Typography>
                          <Typography variant = "h6" style = {{"color":"#2789E1"}}>Certificates</Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Grid container style = {{"flexDirection":"column","alignItems":"center","padding ":" 10px"}}>
                          <Typography variant = "h7" style = {{"color":"#2789E1"}}>500</Typography>
                          <Typography variant = "h6" style = {{"color":"#2789E1"}}>Assignments</Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                    
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Box component = {Grid} display ={{ lg:"none",md:"none"}}>
              <Paper>
                <Grid container direction = {"column"} style = {{"marginBottom":"15px","padding":"10px"}}>
                  <Grid item style = {{"margin":"auto","paddingBottom":"10px"}}>
                    <Typography variant = "h7" style = {{"color":"#2789E1"}}>Share your website</Typography>
                  </Grid>
                  <Grid item style = {{"margin":"auto"}}>
                    <Button><WhatsAppIcon style = {{"color":"#2789E1"}}/></Button>
                    <Button><FacebookIcon style = {{"color":"#2789E1","paddingLeft":"10px","paddingRight":"10px"}}/></Button>
                    <Button><LinkIcon style = {{"color":"#2789E1"}}/></Button>
                  </Grid>
                </Grid>
              </Paper>
          </Box>
          <Grid>
            <Paper item className = {classes.about}> 
              <Grid container spacing = {2} direction = {"column"} wrap="nowrap" zeroMinWidth>

                <Grid container direction = {"row"} style = {{"justifyContent":"space-between","paddingTop":"20px"}}>
                  <Grid item style = {{"paddingLeft":"10px"}}>
                    <Typography variant = "h5" style = {{"color":"#2789E1","font-weight":"600"}}>About</Typography>
                  </Grid>
                  <Grid item style = {{"paddingRight":"50px"}}><Button><EditIcon style = {{"color":"#2789E1"}}/></Button></Grid>
                </Grid>

                <Grid item>
                  <Typography style={{'overflowWrap': 'break-word'}}>
                  Ничего особенного.
                  </Typography>
                </Grid>

              </Grid>
            </Paper>
          </Grid>

          <Grid>
            <Paper item className = {classes.certificates}> 
              <Grid container  direction = {"column"} wrap="nowrap" zeroMinWidth>

                <Grid container direction = {"row"} style = {{"justifyContent":"space-between","paddingTop":"20px"}}>
                  <Grid item style = {{"paddingLeft":"10px"}}>
                    <Typography variant = "h5" style = {{"color":"#2789E1","font-weight":"550"}}>Certificates</Typography>
                  </Grid>
                </Grid>

                <Grid item style = {{"justifyConten":"center"}}>
                  <Slider/>
                </Grid>

              </Grid>
            </Paper>
          </Grid>

          <Grid>
            <Paper item className = {classes.assignments}> 
              <Grid container  direction = {"column"} wrap="nowrap" zeroMinWidth>

                <Grid container direction = {"row"} style = {{"justifyContent":"space-between","paddingTop":"20px"}}>
                  <Grid item style = {{"paddingLeft":"10px"}}>
                    <Typography variant = "h5" style = {{"color":"#2789E1","font-weight":"600"}}>Assignments</Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Slider/>
                </Grid>

              </Grid>
            </Paper>
          </Grid>

        </Grid>

        <Grid item className = {classes.connections}>
          <Grid container direction = {"column"}>
            <Box component = {Grid} className = {classes.hide}>
              <Paper>
                <Grid container direction = {"column"} style = {{"marginBottom":"15px","padding":"10px"}}>
                  <Grid item style = {{"margin":"auto","paddingBottom":"10px"}}>
                    <Typography variant = "h7" style = {{"color":"#2789E1"}}>Share your website</Typography>
                  </Grid>
                  <Grid item style = {{"margin":"auto"}}>
                    <Button><WhatsAppIcon style = {{"color":"#2789E1"}}/></Button>
                    <Button><FacebookIcon style = {{"color":"#2789E1","paddingLeft":"10px","paddingRight":"10px"}}/></Button>
                    <Button><LinkIcon style = {{"color":"#2789E1"}}/></Button>
                  </Grid>
                </Grid>
              </Paper>
            </Box>

            <Grid item>
              <Paper>
                <Grid container direction = "column" style = {{"alignItems":"center"}}>
                  <Grid item style = {{"alignSelf":"center","margin":"0px"}}>
                    <Typography variant = "h5" style = {{"color":"#2789E1"}}>Recommended Clubs</Typography>
                  </Grid>
                  <Grid item>
                    <List className={classes.root1}>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src="/assets/images/myimg.jpeg" />
                        </ListItemAvatar>
                        <ListItemText
                          primary="A"
                          secondary={
                            <React.Fragment>
                              {"For pupils interested in fog war chess"}
                            </React.Fragment>
                          }
                        />
                        <Button><AddCircleIcon style = {{"color":"#2789E1"}}/></Button>
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src="/assets/images/myimg.jpeg" />
                        </ListItemAvatar>
                        <ListItemText
                          primary="B"
                          secondary={
                            <React.Fragment>
                              {"For pupils interested in atomic chess"}
                            </React.Fragment>
                          }
                        />
                        <Button><AddCircleIcon style = {{"color":"#2789E1"}}/></Button>
                      </ListItem>
                      <Divider variant="inset" component="li" />
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src="/assets/images/myimg.jpeg" />
                        </ListItemAvatar>
                        <ListItemText
                          primary="C"
                          secondary={
                            <React.Fragment>
                              {"For pupils interested in 4 play chess"}
                            </React.Fragment>
                          }
                        />
                        <Button><AddCircleIcon style = {{"color":"#2789E1"}}/></Button>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

          </Grid>
        </Grid>
        
      </Grid>
      <Divider variant="middle"/>
      <Footer/>
    </div>
  )
}

export default App;