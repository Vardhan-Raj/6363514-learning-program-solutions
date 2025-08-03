import React, { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Ticket Booking App</h1>

      {isLoggedIn ? (
        <>
          <UserPage />
          <button onClick={handleLogout} style={{ marginTop: "20px" }}>
            Logout
          </button>
        </>
      ) : (
        <>
          <GuestPage />
          <button onClick={handleLogin} style={{ marginTop: "20px" }}>
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default App;
