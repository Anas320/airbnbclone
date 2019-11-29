import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { DayPickerRangeController, DateRangePicker } from 'react-dates'
import moment from 'moment'


let imageUrl = "" 

class Rooms extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
      startDate: moment(),
      endDate: null,
      focusedInput: "startDate"
    };
  }

// componentDidMount() {
	
// 	console.log(imageUrl)
// }



render() {
	let flat = this.props.location.state.flat
	return(
		<div>
    
		<Carousel>
                <div>
                    <img src= {`${flat.imageUrl}`} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src= {`${flat.imageUrl}`} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src= {`${flat.imageUrl}`} />
                    <p className="legend">Legend 3</p>
                </div>
        </Carousel>

        <h2>Name : {flat.name}</h2>

        <h2>Price : {flat.price}</h2>
        <h2>Price Currency : {flat.priceCurrency}</h2>
        <h2>Lattitude : {flat.lat}</h2>
        <h2>Longitude : {flat.lng}</h2>

        
          <DayPickerRangeController
          ref={this.ref}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) =>
            this.setState({ startDate, endDate })
          }
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => {
            console.log("react-dates, !!!!");
            this.setState({ focusedInput: focusedInput || "startDate" });
          }}
          onBlur={() => console.log("esc")}
          numberOfMonths={2}
        /> {console.log(this.state.startDate)}


</div>

		)
}

}

export default Rooms