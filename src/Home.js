import React, { Component } from 'react';
import fire from './config/Fire';
import Admin from './Admin';
import About from './About';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Nav   from './Nav';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
        <Router>
        <form>
        <div className="col-md-6">
        <Nav />
        <Switch>
        <Route   path="/About" exact component={About}/>
        <Route   path="/Admin" exact component={Admin}/>
        <botton onClick={this.logout} style={{marginLeft: '25px'}}>Logout</botton>
        </Switch>
        
        </div>
        </form>  
        </Router>
        );
    }

}

export default Home;