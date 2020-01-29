import React, { Component } from "react";

class StatePractice extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.imageLoad = this.imageLoad.bind(this);
  }

  handleFocus() {
    this.setState({
      message:
        "Please note that by filling out this form you agree to the site terms of service. Thank you."
    });
  }

  handleHover() {
    this.setState({
      message: ""
    });
  }

  imageLoad(event) {
    this.setState({
      imageWidth: event.target.width
    });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter text here."
          onFocus={this.handleFocus}
        />
        <a href="https://en.wikipedia.org/wiki/Main_Page">
          <img
            src="https://en.wikipedia.org/static/images/project-logos/enwiki.png"
            alt="Wikipedia logo"
            onLoad={this.imageLoad}
          />
        </a>
        <h4 onMouseEnter={this.handleHover}>{this.state.message}</h4>
        <h5>Your image is {this.state.imageWidth} pixels wide</h5>
      </div>
    );
  }
}

export default StatePractice;
