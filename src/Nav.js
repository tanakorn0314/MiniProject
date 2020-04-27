import  React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav(){

    const navStyle ={
        color: 'white'
    };
    return(
        <nav>
            <h3>Soutern Infomation Technology</h3>
            <ul className ="nav-links">
                <Link style={navStyle} to="/About">
                    <li>About</li>
                </Link>
                <Link style={navStyle} to="/Admin">
                    <li>Admin</li>
                </Link>
                <Link style={navStyle} to="/Home">
                    <li>Logout</li>
                </Link>

            </ul>
        </nav>
    );
}
export default Nav;