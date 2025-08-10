import React from "react";

class Cart extends React.Component {
  render() {
    return (
      <div>
        <h3>Item: {this.props.itemname}</h3>
        <p>Price: ₹{this.props.price}</p>
        <hr />
      </div>
    );
  }
}

// Default Props
Cart.defaultProps = {
  itemname: "Unnamed Item",
  price: 0,
};

export default Cart;