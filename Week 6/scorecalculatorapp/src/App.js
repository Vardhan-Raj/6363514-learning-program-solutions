import React from "react";
import "./App.css";
import CalculateScore from "./Components/CalculateScore";

function App() { 
    return(
    <div>
        <CalculateScore Name = {"Raj Vardhan"} 
                    School = {"DAV Public School"}
                    total = {489}
                    goal = {5}
        />
    </div>
)}
export default App;