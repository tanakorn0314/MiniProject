import React, { Component } from 'react';
import fire from './config/Fire';

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
        <div className="col-md-6">
        <h1>Welcome to soutern infomation technology</h1>
        <botton onClick={this.logout} style={{marginLeft: '25px'}}>Logout</botton>
        </div>   
        );

    }

}

export default Home;