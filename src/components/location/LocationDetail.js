import React, { Component } from 'react';
import LocationManager from '../../modules/LocationManager';
//import './AnimalDetail.css'

class LocationDetail extends Component {

  state = {
      name: "",
      place: "",
  }

  componentDidMount(){
    console.log("LocationDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to the data; put it into state
    LocationManager.get(this.props.locationId)
    .then((location) => {
      this.setState({
        name: location.name,
        place: location.place
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
          <img src={require('./Germany.jpg')} alt="Germany" />
          </picture>
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
            <p>Place: {this.state.place}</p>
        </div>
      </div>
    );
  }
}

export default LocationDetail;