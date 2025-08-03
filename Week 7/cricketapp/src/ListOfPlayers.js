import React from "react";

const ListOfPlayers = () => {
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 60 },
    { name: "KL Rahul", score: 72 },
    { name: "Shubman Gill", score: 45 },
    { name: "Hardik Pandya", score: 90 },
    { name: "Rishabh Pant", score: 65 },
    { name: "Ravindra Jadeja", score: 50 },
    { name: "Jasprit Bumrah", score: 40 },
    { name: "Mohammed Shami", score: 30 },
    { name: "Suryakumar Yadav", score: 95 },
    { name: "Shreyas Iyer", score: 75 },
  ];

  // Filtering players with scores less than 70 using arrow functions
  const filteredPlayers = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListOfPlayers;