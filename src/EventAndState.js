import React, { Component } from "react";

// 2 ways to fix 'this' issue on handleClick
class EventAndState extends Component {
  constructor() {
    super();
    this.state = {
      inputText: ""
    };

    // this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = event => {
    // console.log("Different Test");
    this.setState({
      inputText: ""
    });
  };

  handleSubmit = event => {
    console.log("Form Submitted.");
    event.preventDefault();
    this.setState({
      inputText: "Sent"
    });
  };

  handleChange = event => {
    // console.dir(event.target);
    this.setState({
      inputText: event.target.value
    });
    console.log(this.state.inputText);
  };

  render() {
    return (
      <div>
        <h1>{this.state.inputText}</h1>
        <form onSubmit={this.handleSubmit}>
          <button
            onClick={() => {
              console.log("Test");
            }}
          >
            Submit
          </button>
          <button onClick={this.handleClick}>Clear form state</button>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="Enter some text."
          />
        </form>
      </div>
    );
  }
}

export default EventAndState;
