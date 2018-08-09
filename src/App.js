import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './App.css';
import SideBarToggle from './SideBarToggle'
import SideBar from './SideBar.js'
import MapContainer from './MapContainer.js'
class App extends Component {

  state={
    locationsAll:[{a:'hello my'},{a:'name is'},{a:'favourite color'},{a:'hi bye'},{a:'locations'}],
    locationsCurrent:[{a:'hello my'},{a:'name is'},{a:'favourite color'},{a:'hi bye'},{a:'locations'}],
    sideBarOpen: false,
    chosenLocation:null // note to self, chosen location would be an object.
    // previousSideBarState:true

  }
  handleTogglesideBar =() =>{
    this.setState((prevState) =>{
      return{sideBarOpen: !prevState.sideBarOpen}
    });
  };
  checkIsOpen = (state) =>{
    let navClassNames
    if (state){
      navClassNames=  "open";

    }else {
      // if (window.innerwidth )
      navClassNames= "close";
    }
    return navClassNames
  }
  updateCurrentLocations = (locationsCurrent) =>{
    this.setState({
      locationsCurrent
    })
  }
  chooseLocation = (location) => {
    if (location !== this.state.chosenLocation) {
      this.setState({
        chosenLocation:location
      })
    }else {
      this.setState({
        chosenLocation:null
      })

      }
    }



  render() {

    console.log(this.state.sideBarOpen)
    if (!this.props.loaded) {
      return <div>Loading...</div>
    } else {
      let navClasses = this.checkIsOpen(this.state.sideBarOpen);

      return (

        <div className="App" style={{height:'100%',width:'100%'}}>
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="App-title">Welcome to React</h1>
            <nav className="nav"><SideBarToggle handleTogglesideBar={this.handleTogglesideBar}/></nav>


          </header>
          <SideBar toggle={navClasses}
          locationsList={this.state.locationsCurrent}
          locationsAll= {this.state.locationsAll}
          updateCurrentLocations = {this.updateCurrentLocations}
          chooseLocation = {this.state.chooseLocation}
          />
{/**/}

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
