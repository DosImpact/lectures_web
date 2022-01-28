import React from "react";

const FlagView = ({ flagUpCount, handleFlagUp, handleFlagDown }) => {
  return (
    <div>
      <h3>FlagView</h3>
      <div>flagUpCount : {JSON.stringify(flagUpCount)}</div>
      <button onClick={handleFlagUp}>handleFlagUp</button>
      <button onClick={handleFlagDown}>handleFlagDown</button>
    </div>
  );
};

export default FlagView;
