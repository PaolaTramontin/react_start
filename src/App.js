import "./css/App.css";
import React  from 'react';
import Loan from './components/Loan'



function App() {




  return (
      <div id="parentDiv">
            <header> Fig Tech 
      <img id="fig" src='https://i.postimg.cc/TwjH2CVc/static1-squarespace.png'/>
    </header>
          <h1 id="loan"> Loan Calculator</h1>
        <Loan/>
      </div>
  );
}

export default App;
