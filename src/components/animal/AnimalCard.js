import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {firstLetterCase} from '../../modules/helpers'
import AnimalManager from '../../modules/AnimalManager'

class AnimalCard extends Component {
  
  handleDelete = (id) => {
    AnimalManager.delete(id)
    .then(() => this.props.getData());
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`../../images/${this.props.animal.url}`)} alt="Animal" />
          </picture>
          <h3>Name: <span className="card-petname">{firstLetterCase(this.props.animal.name)}</span></h3>
          <p>Breed: {this.props.animal.breed} </p>
          <Link to={`/animals/${this.props.animal.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => {this.props.history.push(`/animals/${this.props.animal.id}/edit`)}}>Edit</button>
          <button type="button" onClick={() => this.props.handleDelete(this.props.animal.id)}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default AnimalCard;