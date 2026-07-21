import React from "react";

function ScoreBelow70({ players }) {

  const players70 = players.filter((item) => item.score <= 70);

  return (
    <div>
      <ul>
        {players70.map((item, index) => (
          <li key={index}>
            Mr. {item.name} <span>{item.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ScoreBelow70;