import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {firstLetterCase} from '../../modules/helpers';

class LocationCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`../../images/${this.props.loca.url}`)} alt="place" />
          </picture>
          <h3>Name: <span className="card-locationname">{firstLetterCase(this.props.loca.name)}</span></h3>
          <p>Place: {this.props.loca.place}</p>
          <Link to={`/location/${this.props.loca.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => {this.props.history.push(`/locations/${this.props.loca.id}/edit`)}}>Edit</button>
          <button type="button" onClick={() => this.props.deleteLocation(this.props.loca.id)}>Close</button>
        </div>
      </div>
    );
  }
}

export default LocationCard;