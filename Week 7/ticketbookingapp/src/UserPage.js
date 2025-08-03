import React from "react";

const UserPage = () => {
  const flights = [
    { flightNo: "AI101", from: "Delhi", to: "Mumbai", price: 5000 },
    { flightNo: "AI202", from: "Bangalore", to: "Chennai", price: 3500 },
    { flightNo: "AI303", from: "Hyderabad", to: "Pune", price: 4000 },
  ];

  return (
    <div>
      <h2>User View - Book Your Flight</h2>
      <ul>
        {flights.map((flight, index) => (
          <li key={index}>
            {flight.flightNo} - {flight.from} → {flight.to} : ₹{flight.price}
            <button style={{ marginLeft: "10px" }}>Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
