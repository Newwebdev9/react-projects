import React from 'react';
import '../src/style.css';

class Events extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'Rajanna',
      age: 33,
    };
  }
  clickMe = () => {
    this.setState({
      name: 'codegnan',
      age: '21',
    });
  };
  render() {
    // setTimeout(() => {
    //   this.setState({
    //     name: 'Reactjs',
    //     age: 55,
    //   });
    // }, 5000);
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        <button onClick={this.clickMe}>button</button>
      </div>
    );
  }
}
export default Events;
