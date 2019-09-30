import React, { Component } from 'react'
import AnimalCard from './AnimalCard'
import AnimalManager from '../../modules/AnimalManager'
import './Animal.css'

class AnimalList extends Component {
    //define what this component needs to render
    state = {
        animals: [],
    }

    deleteAnimal = id => {
        AnimalManager.delete(id)
            .then(() => {
                AnimalManager.getAll()
                    .then((newAnimals) => {
                        this.setState({
                            animals: newAnimals
                        })
                    })
            })
    }

    componentDidMount() {
        //getAll from AnimalManager and hang on to that data; put it in state
        AnimalManager.getAll()
            .then((animals) => {
                this.setState({
                    animals: animals
                })
            })
    }

    render() {
        return (
            <div className="container-cards">
                {this.state.animals.map(animal => 
                    <AnimalCard 
                        key={animal.id} 
                        animal={animal}
                        deleteAnimal={this.deleteAnimal} />)}
            </div>
        )
    }

}

export default AnimalList