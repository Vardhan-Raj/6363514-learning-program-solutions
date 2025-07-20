import React from "react";
import Cart from "./Cart";

class OnlineShopping extends React.Component {
  render() {
    const items = [
      { itemname: "Laptop", price: 65000 },
      { itemname: "Mobile", price: 25000 },
      { itemname: "Headphones", price: 2000 },
      { itemname: "Smart Watch", price: 5000 },
      { itemname: "Keyboard", price: 1500 },
    ];

    return (
      <div>
        <h2>Welcome to Online Shopping</h2>
        {items.map((item, index) => (
          <Cart key={index} itemname={item.itemname} price={item.price} />
        ))}
      </div>
    );
  }
}

export default OnlineShopping;
