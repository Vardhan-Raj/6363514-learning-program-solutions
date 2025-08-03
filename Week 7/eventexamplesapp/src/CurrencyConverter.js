import React, { Component } from "react";

class CurrencyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: "",
      euro: null,
    };
  }

  handleChange = (event) => {
    this.setState({ rupees: event.target.value });
  };

  handleSubmit = () => {
    const conversionRate = 0.011; // 1 INR ≈ 0.011 EUR
    const euroValue = this.state.rupees * conversionRate;
    this.setState({ euro: euroValue.toFixed(2) });
  };

  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <h2>Currency Converter</h2>
        <input
          type="number"
          value={this.state.rupees}
          onChange={this.handleChange}
          placeholder="Enter amount in INR"
        />
        <button onClick={this.handleSubmit} style={{ marginLeft: "10px" }}>
          Convert
        </button>

        {this.state.euro !== null && (
          <h3>
            {this.state.rupees} INR = {this.state.euro} EUR
          </h3>
        )}
      </div>
    );
  }
}

export default CurrencyConverter;
