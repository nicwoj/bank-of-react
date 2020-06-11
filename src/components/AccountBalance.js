import React, {Component} from "react";
import {Link} from "react-router-dom";

function AccountBalance(props) {

  let totalDeb = props.debits.reduce(function(prev, cur) {
    return prev + parseFloat(cur.amount);
  }, 0);

  let totalCred = props.credits.reduce(function(prev, cur) {
    return prev + parseFloat(cur.amount);
  }, 0);

  let balance = (totalCred - totalDeb).toFixed(2)

  return (
    <div>
      <h1>Account Balance</h1>

      <p>Total credits: ${totalCred}</p>
      <p>Total debits: ${totalDeb}</p>
      <p>Balance: ${balance}</p>

      <br></br>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/userProfile">Back</Link>
    </div>
  );
}

export default AccountBalance;