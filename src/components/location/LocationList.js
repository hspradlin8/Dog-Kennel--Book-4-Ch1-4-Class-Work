import React, { Component } from 'react'
import LocationCard from './LocationCard'
import LocationManager from '../../modules/LocationManager'
//import './Animal.css'

class LocationList extends Component {
    //define what this component needs to render
    state = {
        locations: [],
    }

    deleteLocation = id => {
        LocationManager.delete(id)
            .then(() => {
                LocationManager.getAll()
                    .then((newLocations) => {
                        this.setState({
                            locations: newLocations
                        })
                    })
            })
    }
    componentDidMount() {
        //getAll from AnimalManager and hang on to that data; put it in state
        LocationManager.getAll()
            .then((locations) => {
                this.setState({
                    locations: locations
                })
            })
    }

    render() {
        return (
            <div className="container-cards">
                {this.state.locations.map(location =>
                    <LocationCard
                        key={location.id}
                        loca={location}
                        deleteLocation={this.deleteLocation}
                        {...this.props} />)}
            </div>
        )
    }

}

export default LocationList
