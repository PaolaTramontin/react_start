import "./css/App.css";
import React from "react";
import Loan from "./components/Loan";

function App() {

  return (
    <div id="parentDiv">
      <nav>
        {" "}
        Fig Tech
        <img id="fig" src="https://i.postimg.cc/TwjH2CVc/static1-squarespace.png" />
        <audio id="audio" controls autoplay loop> <source src="https://www.soundjay.com/free-music/midnight-ride-01a.mp3" /> </audio>
      </nav>
      <div id ="loanDiv"> 
      <h1 id="loan"> Loan Calculator</h1>
      <Loan />
      </div>
    </div>
  );
}

export default App;
