import React, { Component, useState } from 'react';
// import {Marker} from 'google-maps-react';
import { Map, GoogleApiWrapper,Marker  } from 'google-maps-react';
// import treeMarker from '../Assets/Tree-marker.png'

import { baseUrl } from '../shared/basedUrl';
import Axios from 'axios';
import HomeNavbar from './HomePageNavbarComponent';


const mapStyles = {
  width: '100%',
  height: '100%',
};

class Home extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);
    this.state = {
      currentLatLng: {
        lat: null,
        lng: null
      },
      stores: [{lat: 28.281891, lng: 68.438171},
        {latitude: 30.677717, longitude: 73.106812},
        {latitude: 32.337006, longitude: 74.903336},
        {latitude: 31.4504, longitude:  73.1350},
        {latitude: 31.5204, longitude: 74.3587},
        {latitude: 30.1575, longitude:  71.5249}],
      zoom: 20,
      
    };

  }
  componentDidMount() {
    // const id=localStorage.getItem('id');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          position => {
              console.log("CURR LOC :",position.coords);
              this.setState(prevState => ({
                  currentLatLng: {
                      ...prevState.currentLatLng,
                      lat: position.coords.latitude,
                      lng: position.coords.longitude
                  }
              }))
        }
      )
    }
    Axios.get(baseUrl+"map/total_trees_planted/overall/")
    .then(res => {
        console.log(res);
        console.log(res.data);
    })
    .catch(error=>{
        console.log(error)
    })
    Axios.get(baseUrl+"map/total_trees_planted/today")
    .then(res => {
        console.log(res);
        console.log(res.data);
    })
    .catch(error=>{
        console.log(error)
    })
    Axios.get(baseUrl+"map/total_trees_planted/this_week")
    .then(res => {
        console.log(res);
        console.log(res.data);
        })
    .catch(error=>{
        console.log(error)
        })
    Axios.get(baseUrl+"map/total_trees_planted/this_month")
    .then(res => {
        console.log(res);
        console.log(res.data);
    })
    .catch(error=>{
        console.log(error)
    })
            
  }
  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
       lat: store.latitude,
       lng: store.longitude
     }}
     onClick={() => console.log("You clicked me!")} />
    })
  }
  
  render() {
    console.log("currentLatLng",this.state.currentLatLng.lat);
    console.log("currentLatLng",this.state.currentLatLng.lng);
      return (
        // Important! Always set the container height explicitly
        <div>
          <HomeNavbar></HomeNavbar>
            {/* <Col sm="6" md="2">
              <MainSidebar ></MainSidebar>
            </Col> */}
              {/* <div style={{ height: '100%', width: '100%' }}> */}
                {/* <GoogleMapReact 
                  bootstrapURLKeys={{ key: "AIzaSyCBTKwKRvRfL3n1i0zaB5o5uooZfpEJjZ8" }}
                  defaultCenter={this.state.currentLatLng}
                  defaultZoom={this.state.zoom}
                  onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                > 
                
                
                </GoogleMapReact> */}
                <Map google={this.props.google} zoom={8} style={mapStyles} 
                initialCenter={{ lat:this.state.currentLatLng.lat , lng: this.state.currentLatLng.lng}}
                // defaultCenter={this.state.currentLatLng}
                >
                  {/* <Marker position={{ lat: 48.00, lng: -122.00}} /> */}
                        {this.displayMarkers()}
                </Map>
              {/* </div> */}

        </div>
        
      );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCBTKwKRvRfL3n1i0zaB5o5uooZfpEJjZ8"
})(Home);