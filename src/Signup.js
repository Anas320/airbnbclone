import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Image from './nature.jpg'
import Paper from '@material-ui/core/Paper';
import { withRouter,Router, Route } from "react-router-dom";
import Search from './search'
import Autocomplete from '@material-ui/lab/Autocomplete';







let arr = []
let teArray = [];
let result;
let inputValue2;
let cc;
let str = "",
parsed = {}
//let arr2 = [],
let str2 = []
let str3 = ""

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// const useStyles = makeStyles(theme => ({
//   '@global': {
//     body: {
//       //backgroundColor: theme.palette.common.white,
//      //backgroundImage: `url(${"Image"})`
//     },
//   },
//   paper: {

//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     borderRadius: '25px'
    


//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//     borderRadius: 700
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
//   bg:{
//       backgroundImage: `url(${Image})`
//     }
// }));
const style = {
  async: {
    maxWidht: 10
  },
  paper: {

    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '25px'
    


  },
  avatar: {
    margin: 1,
    backgroundColor: 'secondary',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: 3,
    borderRadius: 700
  },
  submit: {
    margin: '3px 0px 2px', 
  },
  bg:{
      backgroundImage: `url(${Image})`
    }
}

class SignUp extends React.Component{
  //const classes = useStyles();

  constructor(props) {
    super(props);
    this.state = {
      range: null,
      startDate: null,
      str1: "",
      str2: "",
      str3: "",
      lat: 0,
      lng: 0
    };
    this.handleSave = this.handleSave.bind(this)
this.handleCords = this.handleCords.bind(this)
  }
  handleCords(location){
    this.setState({
      lat: location.lat,
      lng: location.lng
    })
  }


handleSave(){
  //console.log(this.state.startDate)
         str = JSON.stringify(this.state.startDate)
         str2 = str.split("T")[0].replace('"','')
         str3 = str2.replace(new RegExp('-', 'g'),'/')
         this.props.history.push({
           pathname: '/flat/'+this.state.lat + '/'+this.state.lng
})

    //console.log()

  }
  
  handleSelect(range){
  this.setState({ range });
console.log(this.state.range)
}
handleClick(){
  console.log(this.state.range);
}
// nextPath(path) {
//     this.props.history.push(path);
//   }

  render (){

  return (
    <div>
<Search handleCords = {this.handleCords} />


              
<DateRangePicker

          
          
          startDateId="startDate"
          endDateId="endDate"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
          showClearDates = {true}
          

                  />
                

        
        
        
        {
          

         // str = JSON.stringify(this.state.startDate),
         // str2 = str.split("T")[0].replace('"',''),
         // console.log(str2.replace(new RegExp('-', 'g'),'/'))

        //console.log(Object(this.state.startDate))
         //console.log(this.state.endDate)
        }
        <a onClick  = {this.handleSave}>  <button> Save </button> </a>

</div>
            
  )}

}
export default withRouter(SignUp)