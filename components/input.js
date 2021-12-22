import React from 'react';

class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      Username: '',
      password: '',
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state.Username);
    console.log(this.state.password);
    this.setState({
      Username: '',
      password: '',
    });
  };
  render() {
    return (
      <div>
        <p>
          <input
            type="text"
            onChange={this.handleChange}
            name="Username"
            placeholder="Enter Username"
          />
        </p>
        <p>
          <input
            tupe="text"
            onChange={this.handleChange}
            name="password"
            placeholder="Enter password"
          />
        </p>
        <button onClick={this.handleClick}> Submit </button>
      </div>
    );
  }
}
export default Input;
