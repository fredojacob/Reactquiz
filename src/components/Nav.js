import React from 'react';
import {Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white'
    }
  return (
        <nav >
            <Link to='/'>
            <h2 style={navStyle}>Logo</h2>
            </Link>
            <ul className="nav-links">
                <Link to='/quiz'>
                    <li style={navStyle}> Quiz</li>
                </Link>
                <li> About Me </li>
                <li> Learnigng </li>
                <li> Blog </li>
                <li> Exit</li>
            </ul>
        </nav>
  );
}

export default Nav;