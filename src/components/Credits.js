import React, {Component} from "react";
import { uuid } from 'uuidv4';
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
    };
  }

  handleSubmit = (e) => {
    e.preventDefault()

    let update = {
      description: this.state.newDescription,
      amount: this.state.newAmount,
      date: new Date().toLocaleString(),
      id: uuid(),
    }

    let arr = this.state.credits
    arr.push(update)
    this.setState( {credits: arr})

    //console.log(update)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <>

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
                <td>{"$"}{credit.amount}</td>
                <td>{credit.date}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="addCredit">
        <h3>Add a new credit: </h3>
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

export default Credits;