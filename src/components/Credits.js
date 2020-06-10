import React, {Component} from "react";
import {Link} from "react-router-dom";
import AccountBalance from "./AccountBalance";

class Credits extends Component {
  constructor(props) {
    super(props)
    this.state = {
      credits: props.credits,
      creditBal: props.creditBal,
      debits: props.debits,

      newDescription: "",
      newAmount: "",
      newDate: "",
    };
  }

  render() {
    return (
      <>
      <div className="addDebit">

      </div>

      <div className="transactions">
        <h1>Credits</h1>
        <table>
          <tbody>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
            {this.props.credits.map(credit => 
              <tr key={credit.id}>
                <td>{credit.description}</td>
                <td>{credit.amount}</td>
                <td>{credit.date}</td>
              </tr>
            )}
          </tbody>
        </table>

        <AccountBalance 
          debits={this.props.debits} 
          credits={this.props.credits} 
        />
      </div>
      </>
    );
  }
}

export default Credits;