import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class MapContainer extends Component {
  state:{}


  render() {
    const style = {
      width: '20vh',
      height: '100vh',
      display:'flex'
    }
    return (
      <div className="map-container" style={style}>

      <Map style={{width:'100%'}} google={this.props.google} zoom={14} initialCenter={{
            lat: 51.507351,
            lng: -0.127758
          }}/>
      </div>
    )
  }

}

export default MapContainer
// export default GoogleApiComponent({
//   apiKey: __GAPI_KEY__
// })(Container)
