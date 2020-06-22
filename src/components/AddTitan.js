import React, { Component } from 'react';

class AddTitan extends Component {
  state = {
    name: null,
    age: null,
    job: null,
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTitan(this.state);
  };
  state = {};
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="name">Age: </label>
          <input type="text" id="age" onChange={this.handleChange} />
          <label htmlFor="name">Job: </label>
          <input type="text" id="job" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddTitan;
