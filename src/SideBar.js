import React, { Component } from 'react';
import './App.css';


class SideBar extends Component {
  render(){
    const styles ={width:'100%',height:'80%'}
    let sideBar = "sideBar " + this.props.toggle
    return(

      <div className={sideBar} >
        <div className="location-sideBar"> h1 </div>
        <div className="location-sideBar"> h1 </div>
        <div className="location-sideBar"> h1 </div>
        <div className="location-sideBar"> h1 </div>
        <div className="location-sideBar"> h1 </div>
        <div className="location-sideBar"> h1 </div>

      </div>


      );
  }
}

export default SideBar
