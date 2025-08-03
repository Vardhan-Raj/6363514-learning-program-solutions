import React, { Component } from "react";
import CurrencyConverter from "./CurrencyConverter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleIncrement = () => {
    this.incrementCounter();
    this.sayHello();
  };

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  sayHello = () => {
    alert("Hello! This is an increment event.");
  };

  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  sayMessage = (msg) => {
    alert(msg);
  };

  handleSyntheticEvent = (event) => {
    event.preventDefault();
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>Event Examples App</h1>

        <h2>Counter: {this.state.counter}</h2>

        <button onClick={this.handleIncrement} style={{ margin: "5px" }}>
          Increment
        </button>

        <button onClick={this.handleDecrement} style={{ margin: "5px" }}>
          Decrement
        </button>

        <br />
        <br />

        <button
          onClick={() => this.sayMessage("Welcome")}
          style={{ margin: "5px" }}
        >
          Say Welcome
        </button>

        <br />
        <br />

        <button onClick={this.handleSyntheticEvent} style={{ margin: "5px" }}>
          Synthetic Event (OnPress)
        </button>

        <br />
        <br />

        <CurrencyConverter />
      </div>
    );
  }
}

export default App;