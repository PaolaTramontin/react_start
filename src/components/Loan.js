import React, { useState } from "react";
// import { useForm } from "react-hook-form";


export function Loan() {
    

//initializing the states using Hooks.
const [loanAmount, setLoanAmount] = useState("")

const [loanTerm, setLoanTerm] = useState("")

const [loanTermMonths, setLoanTermMonths] = useState("")

const [interest, setInterest] = useState("")

const [roundedTerm, setRoundedTerm] = useState("")

const [payment, setPayment] = useState("")


//this function will grab the user input and set the new state for the fields.
//if the input has been filled, the if statement will run and set the new state for the input value
    const handleInput = (event) =>{
        if(event.target.name === 'loanAmount'){
            setLoanAmount(event.target.value)
        }
        if(event.target.name === 'loanTerm'){
            let amount = event.target.value
            setLoanTerm(event.target.value)
            // let num = 10
            // console.log(num.toFixed(2))
            // console.log("amount", amount)
            setRoundedTerm (amount)
            // console.log("this loan term", loanTerm)
            let monthly = event.target.value * 12 
            setLoanTermMonths(monthly)
            
        }

        if(event.target.name === 'loanTermMonths'){
            setLoanTermMonths(event.target.value)
            console.log("this loan term months", loanTermMonths)
            let annual = event.target.value / 12 
            setLoanTerm(annual)
            // if(annual % 12 !=0){
            //     annual= annual.toFixed(2)
            //     console.log("decimal")
            // } 
            console.log('annual', annual)
            setRoundedTerm (annual)
        }

        if(event.target.name === 'interest'){
            setInterest(event.target.value)
        }
    
    }

    console.log("errthang", loanAmount, loanTerm, loanTermMonths, interest)

    const handleSubmit = (event) =>{
        event.preventDefault()
        console.log(event.target)
        calculate()
    }



// emi (monthly payments) calculation = p*(r(1+r)^n) / (((1+r)^n) -1) 

//                      KEY:
// p = loan amount
//r= interest rate per month, which is yearly rate / 12 (months) * 100 (because we are dealing with decimals)
// n = number of monthly installments aka loan term 


    const calculate = () =>{
        let p = loanAmount 
        let r = interest / (12 * 100)
        let n = loanTermMonths
        let half = Math.pow((1+r),n)
        let emi = (p*(r*half)) / (half-1)
        let roundedEmi = emi.toFixed(2)
        setPayment(roundedEmi)
        console.log("this is emi", setPayment)
    }


  return (
      <div id="container"> 
          <h2> Enter Your Details </h2>
        <form onSubmit={(event)=>handleSubmit(event)}>
            <label htmlFor="name">Loan Amount </label>
                <br/>
            <input type="text" id="loanAmount" name="loanAmount" value={loanAmount} onChange={handleInput}/> 
                <br/> 
            <label htmlFor="name">Loan term (years)</label>
                <br/>
            <input type="text" id="loanTerm" name="loanTerm" value={roundedTerm}  onChange={handleInput}/>
                <br/>
            <label htmlFor="name">Loan Term in Months </label>
                <br/>
            <input type="text" id="loanTermMonths" name="loanTermMonths" value={loanTermMonths}  onChange={handleInput}/> 
                <br/>
            <label htmlFor="name"> Interest rate per year(%)</label>
                <br/>
            <input type="text" id="interest" name="interest"  value={interest}  onChange={handleInput} /> 
                <br/>
            <button id="button-2" className="btn third" type="submit"> Click to Calculate </button>
                <br/>
            <h3 id="Payment"> {payment} Dollars per Month</h3>   
        </form>
    </div>
  );
}


export default Loan