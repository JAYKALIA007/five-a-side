import React from "react";

export const Instructions = () => {
  return (
    <div className="italic">
      <div className="text-xl font-medium">
        Steps to create your 5 a side dream team
      </div>
      <div className="list-decimal">
        <li>Choose a formation.</li>
        <li>Select a position (e.g., Forward, Midfielder).</li>
        <li>Add Player: Pick a player from the list or search for one.</li>
        <li>Repeat for each Position</li>
        <li>Review your team composition before finalizing.</li>
      </div>
    </div>
  );
};
