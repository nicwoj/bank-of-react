import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import AccountBalance from "./AccountBalance";

class Debits extends Component {
  constructor(props) {
    super(props)
    this.state = {
      debits: [],
      totalDebits: "",
      balance: "",
    };
  }

  //getDebits
  componentDidMount = () => {
    axios
      .get("https://moj-api.herokuapp.com/debits")
      .then((response) => {
        this.setState( {debits: response.data})
      })
      .catch((err) => console.log(err));
  };

  
  getBalance = () => {
    let total = 0

    for (let i = 0; i < this.state.debits.length; i++) {
      total += this.state.debits[i].amount
    }

    this.state.debits = total

    console.log("total debits: " + total)
    
  }


  render() {

    //sums up all amounts and updates totalDebits
    let total = this.state.debits.reduce(function(prev, cur) {
      return prev + cur.amount;
    }, 0);

    this.state.totalDebits = total
  

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
            {this.state.debits.map(debit => 
              <tr key={debit.id}>
                <td>{debit.description}</td>
                <td>{debit.amount}</td>
                <td>{debit.date}</td>
              </tr>
            )}
          </tbody>
        </table>

        <br></br>
        <Link to="/AccountBalance">Account Balance</Link>
        
        <AccountBalance debits={this.state.debits} />
      </div>

      // <>
      //   <div>
      //     <br></br>
      //     <button onClick={this.getDebits} value="">Update Debits</button>
          

      //     <button onClick={this.getBalance} value="">Show Balance</button>
      //     <button onClick={this.displayDebits} value="">Show all debits</button>
      //   </div>
        
      //   {/* <Link to="/debits">Debits</Link> */}
      //   {/* <Debits debits={this.state.debits} /> */}

      //   <AccountBalance />

      // </>
    );
  }
}

export default Debits;