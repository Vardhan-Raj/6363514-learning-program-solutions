import React, { Component } from "react";

class ComplaintRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ename: "",
      complaint: "",
      NumberHolder: "",
      showModal: false, // Custom state to control the modal visibility
      msg: "",
    };

    // Bind event handlers
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  // Event handler for form input changes
  // It uses the event.target.name to dynamically update the state
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // Event handler for form submission
  handleSubmit(event) {
    event.preventDefault();

    // Generate a random 6-digit number as the reference ID
    const transactionId = Math.floor(Math.random() * 900000) + 100000;

    // Create the message based on the document's output
    const message =
      `Thanks ` +
      this.state.ename +
      `\nYour Complaint was Submitted.\nTransaction ID is: ` +
      transactionId;

    // Set the state to show the modal with the message
    this.setState({
      msg: message,
      NumberHolder: transactionId,
      showModal: true,
      ename: "", // Reset the form fields after submission
      complaint: "",
    });
  }

  // Method to close the custom modal
  handleCloseModal() {
    this.setState({ showModal: false, msg: "" });
  }

  render() {
    return (
      <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <h1 style={{ color: "red" }}>Register your complaints here!!!</h1>

        {/* The complaint form */}
        <form
          onSubmit={this.handleSubmit}
          style={{
            margin: "auto",
            width: "300px",
            border: "1px solid #ccc",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              marginBottom: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <label
              style={{ marginRight: "10px", width: "100px", textAlign: "left" }}
            >
              Name:
            </label>
            <input
              type="text"
              name="ename"
              value={this.state.ename}
              onChange={this.handleChange}
              style={{ flex: 1, padding: "8px" }}
              required
            />
          </div>

          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            <label
              style={{ marginRight: "10px", width: "100px", textAlign: "left" }}
            >
              Complaint:
            </label>
            <textarea
              name="complaint"
              value={this.state.complaint}
              onChange={this.handleChange}
              rows="4"
              style={{ flex: 1, padding: "8px" }}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>

        {/* Custom Modal/Alert Box for the output */}
        {this.state.showModal && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                maxWidth: "400px",
                width: "100%",
                border: "1px solid #000",
              }}
            >
              <p style={{ whiteSpace: "pre-line" }}>{this.state.msg}</p>
              <button
                onClick={this.handleCloseModal}
                style={{ padding: "8px 16px", marginTop: "10px" }}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ComplaintRegister;
