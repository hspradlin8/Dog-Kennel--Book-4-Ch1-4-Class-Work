import React, { Component } from 'react';
import AnimalManager from '../../modules/AnimalManager';
//import './AnimalDetail.css'

class AnimalDetail extends Component {

  state = {
    name: "",
    breed: "",
    url: "",
    loadingStatus: true
  }

  handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({ loadingStatus: true })
    AnimalManager.delete(this.props.animalId)
      .then(() => this.props.history.push("/animals"))
  }
  componentDidMount() {
    console.log("AnimalDetail: ComponentDidMount");
    //get(id) from AnimalManager and hang on to that data; put it into state
    AnimalManager.get(this.props.animalId)
      .then((animal) => {
        this.setState({
          name: animal.name,
          breed: animal.breed,
          url: animal.url,
          loadingStatus: false
        });
      });
  }
// imagePath = "../images"
  render() {
    if(this.state.loadingStatus) { 
      return <p>Loading...</p>
    }

    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require(`../../images/${this.state.url}`)} alt="Animal" />
          </picture>
          <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.name}</span></h3>
          <p>Breed: {this.state.breed}</p>
          <button type="button" disabled={this.state.loadingStatus} onClick={this.handleDelete}>Discharge</button>
        </div>
      </div>
    );
  }
}

export default AnimalDetail;