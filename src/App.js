import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from './components/Home';
import UserProfile from "./components/UserProfile";
import LogIn from "./components/LogIn";
import Debits from "./components/Debits";
import Credits from "./components/Credits";
import AccountBalance from "./components/AccountBalance";
import axios from "axios";

class App extends Component {

  constructor() {
    super();
    this.state = {
      accountBalance: 0,
      debits: [],
      credits: [],
      debitBal: "",
      creditBal: "",
      totalBal: "",
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99',
      }
    }
  }

  componentDidMount = () => {
    //debits
    axios
      .get("https://moj-api.herokuapp.com/debits")
      .then((response) => {
        this.setState( {debits: response.data})
      })
      .catch((err) => console.log(err));

    //credits
    axios
    .get("https://moj-api.herokuapp.com/credits")
    .then((response) => {
      console.log(response)
      this.setState( {credits: response.data})
    })
    .catch((err) => console.log(err));
  };

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {

    //const HomeComponent = () => ( <Home accountBalance={this.state.accountBalance}/> );
    const HomeComponent = () => ( <Home /> );

    const UserProfileComponent = () => (
      <UserProfile 
        userName={this.state.currentUser.userName} 
        memberSince={this.state.currentUser.memberSince}
      />
    );

    const DebitComponent = () => ( 
      <Debits 
        debits={this.state.debits} 
        debitBal={this.state.debitBal}
        credits={this.state.credits}
      />);

    const CreditComponent = () => ( 
      <Credits 
        credits={this.state.credits}
        creditBal={this.state.creditBal}
        debits={this.state.debits} 
      />);

    const AccountBalanceComponent = () => ( 
      <AccountBalance 
        debitBal={this.state.debitBal}
        creditBal={this.state.creditBal}
      />);

    const LogInComponent = () => ( 
      <LogIn 
        user={this.state.currentUser}
        mockLogIn={this.state.mockLogIn} {...this.props}
      />
    );

    return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/debits" render={DebitComponent}/> 
            <Route exact path="/credits" render={CreditComponent}/> 
            <Route exact path="/accountBalance" render={AccountBalanceComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
          </div>
        </Router>
    );
  }

}

export default App;