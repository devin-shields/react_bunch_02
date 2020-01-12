import React, { Component } from "react";

class StatePractice extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      imageWidth: ""
    };
  }

  handleTerms = () => {
    this.setState({
      message:
        "Please note: by filling out this form, you agree to this website's terms of service."
    });
  };

  grabWidth = event => {
    console.dir(event.target);
  };

  clearMessage = event => {
    this.setState({
      message: ""
    });
  };

  render() {
    return (
      <div>
        <input type="text" placeholder="Fill in" onFocus={this.handleTerms} />
        <h3 onMouseEnter={this.clearMessage}>{this.state.message}</h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Flatpak_logo.png"
          alt="flatpack logo"
          onLoad={this.grabWidth}
        />
      </div>
    );
  }
}

export default StatePractice;
