import React from 'react'
import Loan from './Loan'

const PaymentInfo = (props) => {


  return (
    <div id="test">
      <h1> Monthly Payments:</h1>
      <h2> {props.payment}</h2>
      <h2> loan Amount = {props.loanAmount} </h2>
    </div>
  )
}

export default PaymentInfo
