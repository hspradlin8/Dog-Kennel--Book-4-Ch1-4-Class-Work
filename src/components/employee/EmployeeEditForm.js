import React, { Component } from "react"
import EmployeeManager from "../../modules/EmployeeManager"
//import "./AnimalForm.css"

class EmployeeEditForm extends Component {
    //set the initial state
    state = {
        employeeName: "",
        breed: "",
        loadingStatus: true,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedEmployee = {
            id: this.props.match.params.animalId,
            name: this.state.employeeName,
            title: this.state.title
        };

        EmployeeManager.update(editedEmployee)
            .then(() => this.props.history.push("/employees"))
    }

    componentDidMount() {
        EmployeeManager.get(this.props.match.params.employeeId)
            .then(employee => {
                this.setState({
                    employeeName: employee.name,
                    title: employee.title,
                    loadingStatus: false,
                });
            });
    }

    render() {
        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="employeeName"
                                value={this.state.employeeName}
                            />
                            <label htmlFor="employeeName">Employee name</label>

                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="title"
                                value={this.state.title}
                            />
                            <label htmlFor="title">Title</label>
                        </div>
                        <div className="alignRight">
                            <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.updateExistingEmployee}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default EmployeeEditForm