import React, { Component } from 'react';
import './App.css';


class SideBar extends Component {
  state={
    query: ''
  }
  updateQuery = (query) => {
    this.setState({
      query: query
    })
  }


  /*BooksAPI.search(query).then((searchResults) => {
    if (query.length>0) {//checks if searchResults has stored any books
      this.setState({
        searchResults
      })}
     else {
      this.setState({
        searchResults: []
      })
    }
  })*/

  render(){
    const styles ={width:'100%',height:'80%'}
    let sideBar = "sideBar " + this.props.toggle
    return(
      <div className={sideBar} >
      <input className="input"
              type="text"
              placeholder="Search Location"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
      {
            (this.props.locationsList.constructor === Array) ?
                this.props.locationsList.map(location =>
            <div className="location-sideBar" key={location.a}> location.a </div>
            ):null
          }
        {/*<div className="location-sideBar"> h1 </div>
        <div className="location-sideBar"> h1 </div>
        <div className="location-sideBar"> h1 </div>
        <div className="location-sideBar"> h1 </div>
        <div className="location-sideBar"> h1 </div>
        <div className="location-sideBar"> h1 </div>*/}

      </div>


      );
  }
}

export default SideBar
