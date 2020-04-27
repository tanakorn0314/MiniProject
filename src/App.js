import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import fire from './config/Fire';
import Home from './Home';
import Login from './Login';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      user: {},
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
     // console.log(user);
      if (user) {
        this.setState({ user });
       // localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        //localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
      <Router>
      <div className="App">
        <Switch>
        <Route   path="" exact component={home}/>
        </Switch>
      {this.state.user ?  ( < Home/>) : (< Login />)};
      </div>
      </Router>
    );
  }
}
const home = () =>(
  <div>
    <h1>Soutern Infomation Technology</h1><br></br><br></br>
  </div>
)
export default App;