import React, { Component } from 'react';
import AddTitan from './components/AddTitan';
import Titan from './components/Titan';

class App extends Component {
  state = {
    titans: [
      { name: 'Joe', age: '32', job: 'net-worker', id: 1 },
      { name: 'Joca', age: '28', job: 'developer', id: 2 },
      { name: 'Jenny', age: '24', job: 'manager', id: 3 },
    ],
  };
  addTitan = (titan) => {
    titan.id = Math.random();
    let titans = [...this.state.titans, titan];
    this.setState({
      titans: titans,
    });
  };
  deleteTitan = (id) => {
    let titans = this.state.titans.filter((titan) => {
      return titan.id !== id;
    });
    this.setState({
      titans: titans,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        <Titan titans={this.state.titans} deleteTitan={this.deleteTitan} />
        <AddTitan addTitan={this.addTitan} />
      </div>
    );
  }
}
export default App;
