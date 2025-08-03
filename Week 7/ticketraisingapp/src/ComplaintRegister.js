import React, { Component } from "react";

class ComplaintRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ename: "",
      complaint: "",
      NumberHolder: "",
      showModal: false, 
      msg: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const transactionId = Math.floor(Math.random() * 900000) + 100000;

    const message =
      `Thanks ` +
      this.state.ename +
      `\nYour Complaint was Submitted.\nTransaction ID is: ` +
      transactionId;

    this.setState({
      msg: message,
      NumberHolder: transactionId,
      showModal: true,
      ename: "", 
      complaint: "",
    });
  }

  handleCloseModal() {
    this.setState({ showModal: false, msg: "" });
  }

  render() {
    return (
      <div style={{ textAlign: "center", fontFamily: "sans-serif" }}>
        <h1 style={{ color: "red" }}>Register your complaints here!!!</h1>

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