import React from 'react'
import Loan from './Loan'

const PaymentInfo = (props) => {


  return (
    <div id="test">
      <div id="paymentText"> 
        <h1> Monthly Payments:</h1>
        <h2 id="total"> ${props.payment}</h2>
        <h2> Total Principal Paid: ${props.loanAmount} </h2>
       <h2> Total Interest Paid: $ {props.totalInterest} </h2>
      </div>
    </div>
  )
}

export default PaymentInfo
