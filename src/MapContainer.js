import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
  state:{}


  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }
    return (
      <div style={style}>

      <Map google={this.props.google} zoom={14} initialCenter={{
            lat: 51.509865,
            lng: -0.351468
          }}/>
      </div>
    )
  }

}

export default MapContainer
// export default GoogleApiComponent({
//   apiKey: __GAPI_KEY__
// })(Container)
