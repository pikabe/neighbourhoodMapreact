import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './App.css';
import SideBarToggle from './SideBarToggle'
import MapContainer from './MapContainer.js'
class App extends Component {
  state:{
    locationsAll:[],
    locationsCurrent:[],
    sideBarOpen: false,

  }
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    } else {
      return (

        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="App-title">Welcome to React</h1>
            <nav className="nav" ><SideBarToggle/></nav>

          </header>
          <SideBarToggle/>

          <MapContainer google={this.props.google}/>

        </div>
      );

    }

  }
}

// export default App;
export default GoogleApiWrapper({
  apiKey: 'AIzaSyDNxyvaHgIR_s1Ao8ncRA_-_vIyXi6Bnao'
})(App)
