import React, { Component } from "react"
import OwnerManager from "../../modules/OwnerManager"
//import "./AnimalForm.css"

class OwnerEditForm extends Component {
    //set the initial state
    state = {
        ownerName: "",
        title: "",
        loadingStatus: true,
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingAnimal = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        const editedOwner = {
            id: this.props.match.params.animalId,
            name: this.state.ownerName,
            title: this.state.title
        };

        OwnerManager.update(editedOwner)
            .then(() => this.props.history.push("/owners"))
    }

    componentDidMount() {
        OwnerManager.get(this.props.match.params.ownerId)
            .then(owner => {
                this.setState({
                    ownerName: owner.name,
                    title: owner.title,
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
                                id="ownerName"
                                value={this.state.ownerName}
                            />
                            <label htmlFor="ownerName">Owner name</label>

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
                                onClick={this.updateExistingAnimal}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        );
    }
}

export default OwnerEditForm