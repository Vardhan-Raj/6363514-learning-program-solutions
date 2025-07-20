import React from "react";
import "./App.css";
import CohortDetails from "./components/CohortDetails";

function App() {
  return (
    <div className="App">
      <CohortDetails
        name="React Bootcamp"
        startDate="2024-08-01"
        endDate="2024-10-31"
        status="ongoing"
      />
      <CohortDetails
        name="Java Fundamentals"
        startDate="2024-05-01"
        endDate="2024-07-15"
        status="completed"
      />
    </div>
  );
}

export default App;