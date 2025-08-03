import React from "react";

function App() {
  // List of office spaces
  const officeSpaces = [
    {
      name: "Tech Park A",
      rent: 55000,
      address: "Bangalore, Karnataka",
      image:
        "https://images.unsplash.com/photos/YzSb3ZOv0OE?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Cyber Hub B",
      rent: 75000,
      address: "Gurgaon, Haryana",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Startup Hub C",
      rent: 60000,
      address: "Hyderabad, Telangana",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Business Tower D",
      rent: 45000,
      address: "Pune, Maharashtra",
      image:
        "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=600&q=80",
    },
  ];

  // Single office object
  const mainOffice = {
    name: "Corporate HQ",
    rent: 85000,
    address: "Mumbai, Maharashtra",
    image:
      "https://images.unsplash.com/photos/htLL2__gL6A?auto=format&fit=crop&w=600&q=80",
  };

  return (
    <div className="App">
      {/* Heading */}
      <h1>Office Space Rental App</h1>

      {/* Single Office Display */}
      <div
        style={{
          border: "2px solid black",
          margin: "15px",
          padding: "15px",
          backgroundColor: "#f8f8f8",
        }}
      >
        <h2>{mainOffice.name}</h2>
        <img src={mainOffice.image} alt={mainOffice.name} width="300" />
        <p>Address: {mainOffice.address}</p>
        <p style={{ color: mainOffice.rent < 60000 ? "red" : "green" }}>
          Rent: ₹{mainOffice.rent}
        </p>
      </div>

      <hr />

      {/* Multiple Office Spaces */}
      {officeSpaces.map((office, index) => (
        <div
          key={index}
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >
          <h2>{office.name}</h2>
          <img src={office.image} alt={office.name} width="250" />
          <p>Address: {office.address}</p>
          <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
            Rent: ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
