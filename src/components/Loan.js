import React, { useState } from "react";
import PaymentInfo from "./PaymentInfo";
import Chart from "react-google-charts";

export function Loan() {
  //initializing the default states using Hooks.

  const [loanAmount, setLoanAmount] = useState(5000);

  const [loanTerm, setLoanTerm] = useState(5);

  const [loanTermMonths, setLoanTermMonths] = useState(60);

  const [interest, setInterest] = useState(4.5);

  const [roundedTerm, setRoundedTerm] = useState(5);

  const [payment, setPayment] = useState(93.22);

  const [totalInterest, setTotalInterest] = useState('');

  //this function will grab the user input and set the new state for the fields.
  //if the input has been filled, the if statement will run and set the new state for the input value
  const handleInput = (event) => {
    if (event.target.name === "loanAmount") {
      let noCommas = event.target.value
      let amount = []
      let amountJoin = ''
      let splitNum = noCommas.split('')

      //loop to remove the comma from user inpit.
      for(let i=0; i<splitNum.length; i++){
        if(splitNum[i] !== ","){
          amount.push(splitNum[i])
        }
        amountJoin = amount.join('')
      }
      setLoanAmount(amountJoin);
    }
    
    if (event.target.name === "loanTerm") {
      let amount = event.target.value;
      setLoanTerm(event.target.value);
      setRoundedTerm(amount);
      let monthly = event.target.value * 12;
      setLoanTermMonths(monthly);
    }

    if (event.target.name === "loanTermMonths") {
      setLoanTermMonths(event.target.value);
      let annual = event.target.value / 12;
      setLoanTerm(annual);
      setRoundedTerm(annual.toFixed(0));
    }
    if (event.target.name === "interest") {
      setInterest(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculate();
  };

  // emi (monthly payments) calculation = p*(r(1+r)^n) / (((1+r)^n) -1)

  //                      KEY:
  // p = loan amount
  //r= interest rate per month, which is yearly rate / 12 (months) * 100 (because we are dealing with decimals)
  // n = number of monthly installments aka loan term

  const calculate = () => {

    //variables
    let p = loanAmount;
    let r = interest / (12 * 100);
    let n = loanTermMonths;
    // calcultin to get emi, only wait first 2 decimals.
    let half = Math.pow(1 + r, n);
    let emi = (p * (r * half)) / (half - 1);
    let roundedEmi = emi.toFixed(2);
    let realTotal = roundedEmi * loanTermMonths;
    let totalInt = realTotal - loanAmount;
    //setting the state for the new interest rate and monthly payment
    setTotalInterest(totalInt.toFixed(2));
    setPayment(roundedEmi);
  };



 

  return (
    <div id="outsideDiv">
      <div id="container">
        <h2 id="details"> Enter Your Details </h2>
        <form  id="mainForm" onSubmit={(event) => handleSubmit(event)}>
          <label htmlFor="name">Loan Amount </label>
          <br />
          <input
            type="text"
            id="loanAmount"
            name="loanAmount"
            value={loanAmount}
            onChange={handleInput}
          />
          <br />
          <label htmlFor="name">Loan term (years)</label>
          <br />
          <input
            type="text"
            id="loanTerm"
            name="loanTerm"
            value={roundedTerm}
            onChange={handleInput}
          />
          <br />
          <label htmlFor="name">Loan Term in Months </label>
          <br />
          <input
            type="text"
            id="loanTermMonths"
            name="loanTermMonths"
            value={loanTermMonths}
            onChange={handleInput}
          />
          <br />
          <label htmlFor="name"> Interest rate per year(%)</label>
          <br />
          <input
            type="text"
            id="interest"
            name="interest"
            value={interest}
            onChange={handleInput}
          />
          <br />
          <button id="button-2" className="grow_spin" type="submit">
            {" "}
            Click to Calculate{" "}
          </button>
          <br />
          {/* <h3 id="Payment"> {payment} Dollars per Month</h3>    */}
        </form>
      </div>
      <PaymentInfo
        payment={payment}
        loanAmount={loanAmount}
        interest={interest}
        totalInterest={totalInterest}
      />
      <div id="chart">
        <Chart
          width={"40vw"}
          height={"40vh"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Task", "Hours per Day"],
            ["Interest", (interest / (12 * 100)) * loanAmount],
            ["Principal", payment - (interest / (12 * 100)) * loanAmount],
          ]}
          options={{
            title: "Loan Breakdown: Monthly Payment: $" + `${payment}`,
            // Just add this option
            is3D: true,
            // colors: ["#e3a38d", "#59c29b", "#ec8f6e", "#f3b49f", "#f6c7b6"],
            colors: ["#E15E50", "#3AE5DF", "#D1EEEE", "#D1EEEE", "#D1EEEE"],
            backgroundColor: "transparent",
          }}
          rootProps={{ "data-testid": "2" }}
        />
      </div>
      <footer>
        <div id="footerDiv">
          <a target="_blank"href="https://github.com/PaolaTramontin/react_start">
            <img
              id="github"
              src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/000/456/278/datas/original.gif"
              width="40px"
            />
            <span id="gh">GitHub </span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Loan;