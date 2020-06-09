import React, {Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import AccountBalance from "./AccountBalance";

class Credits extends Component {
  constructor(props) {
    super(props)
    this.state = {
      credits: [],
      balance: "",
    };
  }

  //getCredits
  componentDidMount = () => {
    axios
      .get("https://moj-api.herokuapp.com/credits")
      .then((response) => {
        console.log(response)
        this.setState( {credits: response.data})
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <h1>Credits</h1>
        <table>
          <tbody>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
            {this.state.credits.map(credit => 
              <tr key={credit.id}>
                <td>{credit.description}</td>
                <td>{credit.amount}</td>
                <td>{credit.date}</td>
              </tr>
            )}
          </tbody>
        </table>

        <br></br>
        <Link to="/AccountBalance">Account Balance</Link>
        
        <AccountBalance credits={this.state.credits} />
      </div>
    );
  }
}

export default Credits;