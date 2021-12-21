import React from 'react';

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      Username: '',
    };
  }
  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  handleClick = () => {
    console.log(this.state.Username);
  };
  render() {
    console.log(this.state.Username);
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Enter Username"
        />
        <button onClick={this.handleClick}> Submit </button>
      </div>
    );
  }
}
export default Input;
