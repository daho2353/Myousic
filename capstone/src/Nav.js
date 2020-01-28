import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav(){
    return(
        <nav>
            <h3> Discover M(you)sic </h3>
            <ul className="nav-links">
            <Link to = "/profile">
                <li> Profile </li>
            </Link>
            <Link to = "/playlist">
                <li> Daily Mix </li>
            </Link>
            <Link to = "/stats">
                <li> Stats </li>
            </Link>
            </ul>
        </nav>
    );
}

export default Nav;