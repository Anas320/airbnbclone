import React, { Component } from 'react';
import './App.css';
//import Appbar from '@material-ui/core/appbar'
// import {Router, Route, withRouter} from 'react-router-dom'
//import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Body from  './Body'
import Flat from './Flat' 
import Rooms from './Rooms'
import Appbar from './ButtonAppBar'
import AutoComplete from './AutoComplete'
import Geosuggest from 'react-geosuggest'
import './geo.css'
import Autocomplete from '@material-ui/lab/Autocomplete';

//import AutoComplete from './AutoComplete'

const google = window.google


 




//import { RangeSlider } from '@appbaseios/reactivesearch';






export default class App extends Component{

onSuggestSelect(suggest) {
    console.log(suggest);
  }

  render() {
var fixtures = [
      {label: 'Old Elbe Tunnel, Hamburg', location: {lat: 53.5459, lng: 9.966576}},
      {label: 'Reeperbahn, Hamburg', location: {lat: 53.5495629, lng: 9.9625838}},
      {label: 'Alster, Hamburg', location: {lat: 53.5610398, lng: 10.0259135}}
    ];
    

   
    return (
      <div classNam="app">

      
       <Router>
              <Appbar />
       

       
        <Route
          exact
          path='/'
          component = {Body}
          />
        <Route exact path='/flat/:lat/:lng' component={Flat} />
        <Route path='/flat/rooms' component = {Rooms} />

         
      </Router>

          
            
      </div>
    );
  
  
}}










