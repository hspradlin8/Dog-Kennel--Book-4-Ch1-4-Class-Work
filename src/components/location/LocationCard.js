import React, { Component } from 'react';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./Germany.jpg')} alt="Germany" />
          </picture>
          <h3>Name: <span className="card-locationname">{this.props.location.name}</span></h3>
          <p>location: {this.props.location.location}</p>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;