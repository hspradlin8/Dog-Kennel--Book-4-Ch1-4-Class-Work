import React, { Component } from 'react'
import EmployeeCard from './EmployeeCard'
import EmployeeManager from '../../modules/EmployeeManager'
//import './Animal.css'

class EmployeeList extends Component {
    //define what this component needs to render
    state = {
        employees: [],
    }

    deleteEmployee = id => {
        EmployeeManager.delete(id)
            .then(() => {
                EmployeeManager.getAll()
                    .then((newEmployees) => {
                        this.setState({
                            employees: newEmployees
                        })
                    })
            })
    }
    componentDidMount() {
        //getAll from AnimalManager and hang on to that data; put it in state
        EmployeeManager.getAll()
            .then((employees) => {
                this.setState({
                    employees: employees
                })
            })
    }

    render() {
        return (
            <div className="container-cards">
                {this.state.employees.map(employee => 
                    <EmployeeCard 
                        key={employee.id} 
                        employee={employee}
                        deleteEmployee={this.deleteEmployee} />)}
            </div>
        )
    }

}

export default EmployeeList