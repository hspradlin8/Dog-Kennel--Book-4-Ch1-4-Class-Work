import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import LocationDetail from './location/LocationDetail'
import Home from './home/Home'
import AnimalList from './animal/AnimalList'
import AnimalDetail from './animal/AnimalDetail'
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import OwnerDetail from './owner/OwnerDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import AnimalForm from './animal/AnimalForm'


class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/animals" render={(props) => {
          return <AnimalList {...props}/>
        }} />
        <Route path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)}{...props} />
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/location" render={(props) => {
          return <LocationList />
        }} />
        <Route path="/location/:locationId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <LocationDetail locationId={parseInt(props.match.params.locationId)}{...props} />
        }} />
        <Route exact path="/owner" render={(props) => {
          return <OwnerList />
        }} />
        <Route path="/owner/:ownerId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)}{...props} />
        }} />
        <Route exact path="/employees" render={(props) => {
          return <EmployeeList />
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <EmployeeDetail employeeId={parseInt(props.match.params.ownerId)}{...props} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews