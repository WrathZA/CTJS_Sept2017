import React, { Component } from "react";
import { CodePane, Text } from "spectacle";

import fetch from "isomorphic-fetch";
import sleep from "sleep-promise";

export default class Interactive extends Component {
  constructor() {
    super();
    this.state = {
      arr: [],
      count: 1
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });

    fetch(`http://echo.jsontest.com/key/${this.state.count}`)
        .then((res) => res.json())
        .then(sleep(Math.floor((Math.random() * 1000) + 100)))
        .then((json) => {
          this.setState({
            arr: Array.concat(this.state.arr, json.key)
          });
        });
  }

  handleReset() {
    this.setState({
      arr: [0],
      count: 1
    });
  }
  render() {
    return (
      <div>
        <Text textSize={70} textColor="primary">
            {this.state.arr.toString()}
        </Text>
        <CodePane textSize={26}
          lang="js"
          source={require("raw-loader!../assets/interactive.example")}
          margin="20px auto"
        />
        <button type="button" onClick={this.handleClick}>Click Me</button>
        <button type="button" onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
