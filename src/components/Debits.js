import React, {Component} from "react";
import {Link} from "react-router-dom";
import AccountBalance from "./AccountBalance";
import { uuid } from 'uuidv4';

class Debits extends Component {
  constructor(props) {
    super(props)
    this.state = {
      debits: props.debits,
      debitBal: props.debitBal,
      credits: props.credits,

      newDescription: "",
      newAmount: "",
      newDate: "",
      newID: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let update = {
      description: this.state.newDescription,
      amount: this.state.newAmount,
      date: new Date().toLocaleString(),
      id: uuid(),
    }

    let arr = this.state.debits
    arr.push(update)
    this.setState( {debits: arr})

    console.log(update)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <>

      <div className="transactions">
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
      </div>

      <div className="addDebit">
        <h3>Add a new debit: </h3>
        <form>
          <label>Description: </label><br></br>
          <input
            type="text"
            name="newDescription"
            onChange={this.handleChange}
          ></input><br></br>
          <label>Amount: </label><br></br>
          <input
            type="text"
            name="newAmount"
            onChange={this.handleChange}
          ></input><br></br>
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>

      <AccountBalance 
          debits={this.props.debits} 
          credits={this.props.credits} 
      />
      
      </>
    );
  }
}

export default Debits;