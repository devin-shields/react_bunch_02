import React, { Component } from "react";

// 2 ways to generate events onClick
class SimpleEvents extends Component {
  handleClick() {
    console.log("Different Test");
  }

  handleSubmit(event) {
    console.log("Form Submitted.");
    event.preventDefault();
  }

  handleChange() {
    console.log("I'm Changed!!");
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <button
            onClick={() => {
              console.log("Test");
            }}
          >
            Click Me!
          </button>
          <button onClick={this.handleClick}>Me too . . .</button>
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

export default SimpleEvents;
