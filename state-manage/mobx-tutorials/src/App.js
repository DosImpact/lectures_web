import React from "react";
import Test from "@components/Test";

function App() {
  return (
    <div>
      <Test />
      <h1>Welcome to React App!!</h1>
      <h3>Date : {new Date().toDateString()}</h3>
    </div>
  );
}

export default App;
