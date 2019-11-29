import React from "react";
import Geolocation from "react-geolocation";

let lat = null
let lng = null
let positionMain = null 



export default (props) => {
  function locationHandler(position){
// positionMain = position
props.geoLocationHandler(position.coords.latitude, position.coords.longitude)

console.log(position)
}
  return (
    <Geolocation
      onSuccess={locationHandler}
      render={({
        fetchingPosition,
        position: { coords: { latitude, longitude } = {} } = {},
        error,
        getCurrentPosition
      }) =>
        <div>
          <a onClick={() => {locationHandler({coords:{
            latitude: 12.243, longitude: 32.434
          }})}}><button>Get Position</button></a>
          {error &&
            <div>
              {error.message}
            </div>}
          <pre>
            latitude: {latitude} 
            longitude: {longitude}
          </pre>
        </div>}
    />
  );
};