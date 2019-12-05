import React, { Component } from 'react';
import './App.css';
import Flat from './components/flat';
import GoogleMapReact from 'google-map-react';
import Marker from './components/marker';
//import Rheostat from 'rheostat';
import GeoLocation from './GeoLocation';
import Modal from 'react-modal';
import Slider from './Slider';
//import Localslider from './Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom'


let arr = []
let arr2 = []
let minDup = 0
let maxDup = 0
// let butVal = 300
let arr3 = []
let minSli = 0
let maxSli = 0
let lat = 0
let lng = 0

let center = {
      lat: 48.8566,
      lng: 2.3522
    };

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
//Modal.setAppElement('#Flats')


class Flats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      allFlat: [],
      selectedFlat: null,
      search: "",
      price: 1,
      modalIsOpen: false,
      min: 0, 
      max: 1000,
      minOrig: 0,
      maxOrig: 10000,
      MoreFiltersModalIsOpen: false,
      id: 130,
      idOrig: 0,
      dynButVal: 300,
      value: [],
      userLocation: null,
      button: false,
      lat: 0,
      lng: 0,
      searchLat: 0,
      searchLng: 0

    };
  }


 

  componentDidMount() {
    Modal.setAppElement('body');
    fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json')
      .then(response => response.json())
      .then((data) => {
        //console.log(data)
        this.setState({
          flats: data,
          allFlats: data
        });
        minSli = data[0].price
        maxSli = data[0].price
        // console.log(data[0].price)
      for(let i =0; i < data.length; i++){
        if(minSli > data[i].price){
          minSli = data[i].price

        }
        if(maxSli < data[i].price) {
          maxSli = data[i].price
        }
        
      }
      this.setState({
        min: minSli,
        max: maxSli
      })
      console.log(minSli)
      console.log(maxSli)
      // lat = window.location.href.split("/")[4]
      // lng = window.location.href.split("/")[5]
      

this.setState({
  searchLat: window.location.href.split("/")[4],
  searchLng: window.location.href.split("/")[5]
},
() => {
  console.log(this.state.searchLng, this.state.searchLat)
})
      // center.lat = 12

      // center.lng = 23

      })
  }

  buttonHandler = () => {
    this.setState({
      button: !this.state.button
    },
    () => {
      console.log(this.state.button)
    })

  }
  // geoLocationHandlerForFlat = (lat1, lng1) => {
  //   console.log(lat,lng)
  //   center.lat = lat
  //   center.lng = lng


  // }
  geoLocationHandlerForFlat = (lat1, lng1) => {
    //console.log(lat1, lng1)
    // center = {
    //   lat: this.state.lat,
    //   lng: this.state.lng
    // }
    console.log(center.lat, center.lng)
    console.log(this.state.button)
    this.setState({
      button: !this.state.button
    })
    this.props.history.push({
      pathname: "/flat/" + lat1 + "/" + lng1 
    })


  }

  geoLocationHandler = (lat, lng) => {
   
    center.lat = lat
    center.lng = lng
    this.setState({
      lat: lat,
      lng: lng
    },
    () => {console.log(this.state.lat, this.state.lng)})

   //console.log(center.lat, center.lng)
  
}

  slideHandler = (value) => {
  //console.log(value)
  this.setState({
    min: value[0],
    max: value[1]
  })
  };


  anchorHandler = (flat) => {
    this.props.history.push({
      pathname: '/flat/rooms',
      state: {
        flat
      }
    })


  }
 


  dynButVal = () => {
 const { flats, min, max, id } = this.state;
  console.log(flats);
  
   arr3 = flats.filter(function (flat) {
           return flat.price > min && flat.price < max && flat.id> id

          })
   
   this.setState({
    dynButVal: arr3.length

   })
   
};

  selectFlat = (flat) => {
    this.setState({
      selectedFlat: flat
    })
  };

  handleSearch = (event) => {
    //console.log(event);
    this.setState({
      search: event.target.value,
      flats: this.state.allFlats.filter((flat) => new RegExp(event.target.value, "i").exec(flat.name))
    })

  };
  setMin = (evt)=>{
    this.setState({
      min: evt.target.value 
    },
    () => {
      this.dynButVal()
    })
    


  };
  setMax = (evt) => {
    this.setState({
      max: evt.target.value
},
    () => {
      this.dynButVal()
    }) 
  };


  openModal = () => {
    this.setState({modalIsOpen: true});
  };
  openMoreFiltersModal = () => {
    this.setState({MoreFiltersModalIsOpen: true});
  };
  // closeMoreFiltersModal = () => {
    
  // };
  handleMoreFilters = () => {
    this.setState({
      idOrig: this.state.id
    })
    
    this.setState({MoreFiltersModalIsOpen: false});

  }
 
  // afterOpenModal = () => {
  //   // references are now sync'd and can be accessed.
  //   this.subtitle.style.color = '#f00';
  // }
 
  // closeModal = () => {
    
  // };

  handleSubmit = () => {
    this.setState({
      minOrig: this.state.min,
      maxOrig: this.state.max

    })
    this.setState({modalIsOpen: false});
    

  };
  addId  =() => {
    
    this.setState({
  id: this.state.id+10
},
 () => {
  this.dynButVal()
 })


  };
  subId = () => {
    
    this.setState({
    id: this.state.id-10
    }, () =>{
      this.dynButVal()
    })
    
  };



  render() {

    

    // if (this.state.selectedFlat) {
    //   center = {
    //     lat: this.state.selectedFlat.lat,
    //     lng: this.state.selectedFlat.lng
    //   };
    // }
    
      center = {
        lat: parseFloat(window.location.href.split("/")[4]),
        lng: parseFloat(window.location.href.split("/")[5])
      }
      
    
     
      
    

    const {price} = this.state
    const {minOrig} = this.state
    const {maxOrig} = this.state
    const {idOrig} = this.state
    const {dynButVal} = this.state
    const {min} = this.state
    const {max} = this.state
    const {value} = this.state
    const {userLocation} = this.state


    


    return (
      <div className="app">


        <div className="main">
        <div>
        
        <Modal
          isOpen={this.state.modalIsOpen}
          //onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        {/*<AirbnbSlider 
        ThumbComponent={this.AirbnbThumbComponent}
        getAriaLabel={index => (index === 0 ? 'Minimum price' : 'Maximum price')}
         defaultValue={[1, 1000]}  /> */
         

       }
         
        <Slider 
                slideHandler = {this.slideHandler}
                min = {min}
                max = {max}

        />
        
               Min
          <input value={min} onChange = {this.setMin} />
               Max  
          <input value={max} onChange = {this.setMax} />
  <button onClick={this.handleSubmit}>Save</button>        
          

          
        </Modal>
        <Modal
          isOpen={this.state.MoreFiltersModalIsOpen}
          //onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeMoreFiltersModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        
        <button onClick={this.subId}>-</button>{this.state.id}<button onClick={this.addId}>+</button>
        <button onClick={this.handleMoreFilters}>{dynButVal}</button> 
        </Modal>



       <ul className="nav">
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" onClick={this.openModal}>Price</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" onClick={this.openMoreFiltersModal}>More Filters</a>
  </li>
</ul>
             
            </div>
            <GeoLocation geoLocationHandler = {this.geoLocationHandler} />
            <a onClick = {() => {this.geoLocationHandlerForFlat(this.state.lat, this.state.lng)}}><button> Get My Position </button></a>
            


          

          <div className="flats">
          
{

            arr= this.state.flats.filter(function (flat) {
              return flat.price >= minOrig && flat.price <= maxOrig && flat.id >= idOrig
         
}),
             console.log(336)
            

            
     
            
            

          }

          
            {arr.map((flat) => {
              return <a onClick = {() => this.anchorHandler(flat)}> <Flat
                key={2}
                flat={flat}
                selectFlat={this.selectFlat}
                /> </a>

            })

          }
        
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
//   YOU CAN PUT YOUR API KEY IN THE LINE BELOW WHERE {{ key: <YOUR API KEY>}}

            bootstrapURLKeys = {{ key: 'AIzaSyAi66M2xnqwm7bCpEYY0Ksp0a7OjuVFAKE' }} 
            center={center}
            zoom={12}
            //yesIWantToUseGoogleMapApiInternals
          >
            {this.state.flats.map((flat) => {
              return <Marker
                key={flat.name}
                lat={flat.lat}
                lng={flat.lng}
                text={flat.price}
                selected={flat === this.state.selectedFlat} />
            })}
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default withRouter(Flats);
