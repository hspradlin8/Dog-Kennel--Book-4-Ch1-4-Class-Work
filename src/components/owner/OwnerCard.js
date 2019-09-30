import React, { Component } from 'react';

class OwnerCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./lady.png')} alt="Boss Lady" />
          </picture>
          <h3>Name: <span className="card-ownername">{this.props.owner.name}</span></h3>
          <p>Title: {this.props.owner.title}</p>
          <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Let go</button>
        </div>
      </div>
    );
  }
}

export default OwnerCard;