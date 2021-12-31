import React, { Component, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import {Marker} from 'google-maps-react';
// import treeMarker from '../Assets/Tree-marker.png'
import { Button, Modal, Row, Col, Container } from 'reactstrap';

import AnyReactComponent from './AddImageComponent';
import Sidebar from './SidebarComponent';
import { baseUrl } from '../shared/basedUrl';
import Axios from 'axios';
import MainNavbar from './MainPageNavebarComponent';

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    console.log("Props",this.props);
    this.state = {
      currentLatLng: {
        lat: null,
        lng: null
      },
      zoom: 20,
      markers: [
        {
          lat: "",
          lng: "",
        }
      ]
    };
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    const id=localStorage.getItem('id');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          position => {
              // console.log(position.coords);
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
    Axios.get(baseUrl+"map/map_points/"+id,{method: 'GET',withCredentials: true})
        .then(res => {
            console.log(res);
            console.log(res.data);
          })
          .catch(error=>{
            console.log(error)
            console.log(error.response)
          })  

  }
  
  onClick (event) {
    // console.log('t',event);
    const lat = event.lat;
    const lng = event.lng;

    // console.log('lat',lat);
    // console.log('lng',lng);
    this.setState(previousState => {
      return {
        markers: [
          ...previousState.markers,
          {
            lat,
            lng,
          }
        ]
      };
    });
  }
  
  render() {
    const renderMarkers = (map, maps) => {
      // console.log("maps",maps);
      // console.log("map",map);
      let marker = new maps.Marker({
        position: this.state.currentLatLng,
        zoom: this.state.zoom,
        draggable: true,
        dragend: (e) => console.log(e),
        map,
        title: "My Location",
      });
      return marker;
    };
    // console.log("MARKER",this.state.markers);
    // console.log("MARKER",this.state.markers.length);
    if(this.state.markers.length==1)
    {
      return (
        // Important! Always set the container height explicitly
        <div >
          <MainNavbar></MainNavbar>
              <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact 
                  bootstrapURLKeys={{ key: "AIzaSyCBTKwKRvRfL3n1i0zaB5o5uooZfpEJjZ8" }}
                  defaultCenter={this.state.currentLatLng}
                  defaultZoom={this.state.zoom}
                  onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                  onClick={this.onClick}> 
                </GoogleMapReact>
              </div>
        </div>
      );

    }
    else{

      return (
        // Important! Always set the container height explicitly
         <div >
          <MainNavbar></MainNavbar> 
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact 
                  bootstrapURLKeys={{ key:  "AIzaSyCBTKwKRvRfL3n1i0zaB5o5uooZfpEJjZ8" }}
                  defaultCenter={this.state.currentLatLng}
                  defaultZoom={this.state.zoom}
                  onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                  onClick={this.onClick}
                >
                  {/* {console.log(":ATLNG",this.state.markers)} */}
                  {/* {this.state.markers.map((marker, index) => {console.log(":ATLNG",marker.lng)})} */}
                {this.state.markers.map((marker, index) => (
                  <AnyReactComponent key={index} lat={marker.lat} lng={marker.lng} text="My Marker" />
                ))}
                </GoogleMapReact>
            </div>
        </div>
        
        
      );
    }
    
    
  }
}
 
export default SimpleMap;