import React, { Component } from "react";

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const url = "https://api.randomuser.me/";
      const response = await fetch(url);
      const data = await response.json();

      this.setState({ person: data.results[0], loading: false });

      console.log(data.results[0]);
    } catch (error) {
      console.error("Error fetching user data:", error);
      this.setState({ loading: false });
    }
  }

  render() {
    if (this.state.loading) {
      return <div>Loading user data...</div>;
    }

    if (!this.state.person) {
      return <div>Did not find any user.</div>;
    }

    const { name, picture } = this.state.person;
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>
          {name.title} {name.first} {name.last}
        </h2>
        <img src={picture.large} alt={`${name.first}`} />
      </div>
    );
  }
}

export default Getuser;
