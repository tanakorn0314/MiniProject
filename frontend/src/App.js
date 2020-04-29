import React, { Component } from 'react';
import './App.css';
import fire from './config/Fire';
import Login from './components/Login';
import Home from './components/Home';


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
      <div className="App">
      {this.state.user ?  ( < Home/>) : (< Login />)}
      </div> 
    );
  }
}

export default App;