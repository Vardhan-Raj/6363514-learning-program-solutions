import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import TrainersMock from "./TrainersMock";
import TrainersList from "./TrainersList";
import TrainerDetails from "./TrainerDetails";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Trainers App</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/trainers">Trainer List</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/trainers"
            element={<TrainersList trainers={TrainersMock} />}
          />
          <Route path="/trainer/:id" element={<TrainerDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;