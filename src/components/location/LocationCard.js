import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {firstLetterCase} from '../../modules/helpers';

class LocationCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./Germany.jpg')} alt="Germany" />
          </picture>
          <h3>Name: <span className="card-locationname">{firstLetterCase(this.props.location.name)}</span></h3>
          <p>Place: {this.props.location.place}</p>
          <Link to={`/location/${this.props.location.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.location.id)}>Close</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;