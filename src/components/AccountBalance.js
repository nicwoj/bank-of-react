import React, {Component} from "react";
import {Link} from "react-router-dom";

//class AccountBalance extends Component {
function AccountBalance(props) {

  let total = props.debits.reduce(function(prev, cur) {
    return prev + cur.amount;
  }, 0);

  return (
    <div>
      <h1>Account Balance</h1>

      Total debits: {total}
      <br></br>

      {/* {props.debits.map(debit => debit.amount + " " )} */}
      <br></br>
      <Link to="/">Home</Link>
    </div>
  );
}

export default AccountBalance;