import { Route, Redirect } from 'react-router-dom'
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
import Login from './auth/Login'
import AnimalEditForm from './animal/AnimalEditForm'
import EmployeeEditForm from './employee/EmployeeEditForm'
import OwnerEditForm from './owner/OwnerEditForm'
import LocationEditForm from './location/LocationEditForm'


class ApplicationViews extends Component {

  isAuthenticated = () => localStorage.getItem("credentials") !== null

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home />
        }} />
        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/animals" render={props => {
          if (this.isAuthenticated()) {
            return <AnimalList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route exact path="/animals/:animalId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <AnimalDetail animalId={parseInt(props.match.params.animalId)}{...props} />
        }} />
        <Route path="/animals/new" render={(props) => {
          return <AnimalForm {...props} />
        }} />
        {/* Make sure you add the `exact` attribute here */}
        <Route exact path="/location" render={props => {
          if (this.isAuthenticated()) {
            return <LocationList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/location/:locationId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <LocationDetail locationId={parseInt(props.match.params.locationId)}{...props} />
        }} />
        <Route path="/locations/:locationId(\d+)/edit" render={props => {
          return <LocationEditForm {...props} />
        }}
        />
        <Route exact path="/locations/:locationId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <LocationDetail locationId={parseInt(props.match.params.locationId)} {...props} />
        }} />
        <Route exact path="/owner" render={props => {
          if (this.isAuthenticated()) {
            return <OwnerList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/owner/:ownerId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)}{...props} />
        }} />
        <Route path="/owners/:ownerId(\d+)/edit" render={props => {
          return <OwnerEditForm {...props} />
        }}
        />
        <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <OwnerDetail ownerId={parseInt(props.match.params.ownerId)} {...props} />
        }} />
        <Route exact path="/employees" render={props => {
          if (this.isAuthenticated()) {
            return <EmployeeList {...props} />
          } else {
            return <Redirect to="/login" />
          }
        }} />
        <Route path="/employees/:employeeId(\d+)/edit" render={props => {
          return <EmployeeEditForm {...props} />
        }}
        />
        <Route exact path="/employees/:employeeId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <EmployeeDetail employeeId={parseInt(props.match.params.animalId)} {...props} />
        }} />
        <Route path="/employees/:employeeId(\d+)" render={(props) => {
          // Pass the animalId to the AnimalDetailComponent
          return <EmployeeDetail employeeId={parseInt(props.match.params.ownerId)}{...props} />
        }} />
        <Route path="/animals/:animalId(\d+)/edit" render={props => {
          return <AnimalEditForm {...props} />
        }}
        />
        <Route path="/login" component={Login} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews