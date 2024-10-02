import React from 'react';
import Header from "./components/Header";
import Challenges from "./components/Challenges";

function App() {
  // let amount = Math.floor(Math.random() * 10);
  // if (amount === 0) {
  //   amount = 1;
  // }

  return (
      <>
        <Header></Header>
        <Challenges></Challenges>
      </>
  );
}

export default App;
