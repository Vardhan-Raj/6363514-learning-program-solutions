import React from "react";

const IndianPlayers = () => {
  const T20players = [
    "Virat Kohli",
    "Rohit Sharma",
    "Suryakumar Yadav",
    "Hardik Pandya",
  ];
  const RanjiTrophyPlayers = [
    "Mayank Agarwal",
    "Cheteshwar Pujara",
    "Ajinkya Rahane",
    "Wriddhiman Saha",
  ];

  // Merge the two arrays using ES6 spread operator
  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  // Odd and Even team players
  const oddPlayers = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenPlayers = allPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>Merged Indian Players</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>Odd Team Players</h3>
      <ul>
        {oddPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>Even Team Players</h3>
      <ul>
        {evenPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;