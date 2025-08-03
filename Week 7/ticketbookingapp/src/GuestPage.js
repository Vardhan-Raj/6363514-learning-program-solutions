import React from "react";

const GuestPage = () => {
  const flights = [
    { flightNo: "AI101", from: "Delhi", to: "Mumbai", price: 5000 },
    { flightNo: "AI202", from: "Bangalore", to: "Chennai", price: 3500 },
    { flightNo: "AI303", from: "Hyderabad", to: "Pune", price: 4000 },
  ];

  return (
    <div>
      <h2>Guest View - Available Flights</h2>
      <ul>
        {flights.map((flight, index) => (
          <li key={index}>
            {flight.flightNo} - {flight.from} → {flight.to} : ₹{flight.price}
          </li>
        ))}
      </ul>
      <p>Please log in to book tickets.</p>
    </div>
  );
};

export default GuestPage;
