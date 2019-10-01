import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {firstLetterCase} from '../../modules/helpers';

class EmployeeCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./guy.png')} alt="Man" />
          </picture>
          <h3>name: <span className="card-employeename">{firstLetterCase(this.props.employee.name)}</span></h3>
          <p>title: {this.props.employee.title}</p>
          <Link to={`/employees/${this.props.employee.id}`}><button>Details</button></Link>
          <button type="button" onClick={() => this.props.deleteEmployee(this.props.employee.id)}>Fire</button>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;