import React, {Component} from "react";
import {Link} from "react-router-dom";
import AccountBalance from "./AccountBalance";

class Debits extends Component {
  constructor(props) {
    super(props)
    this.state = {
      debits: props.debits,
      debitBal: props.debitBal,
      credits: props.credits
    };
  }

  render() {
    return (
      <div>
        <h1>Debits</h1>
        <table>
          <tbody>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
            {this.props.debits.map(debit => 
              <tr key={debit.id}>
                <td>{debit.description}</td>
                <td>{debit.amount}</td>
                <td>{debit.date}</td>
              </tr>
            )}
          </tbody>
        </table>

        <AccountBalance 
          debits={this.props.debits} 
          credits={this.props.credits} 
        />
      </div>
    );
  }
}

export default Debits;