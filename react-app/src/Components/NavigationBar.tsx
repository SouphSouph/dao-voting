import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/NavigationBar.css'; // Import your CSS file for NavigationBar styles

function NavigationBar() {
    return (
        <div>
            <nav>
                <ul className="nav-list">
                <li className="nav-item">
                    <NavLink
                        to="/home"
                        className="nav-link"
                    >
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/proposition"
                        className="nav-link"
                    >
                        Proposition
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/vote"
                        className="nav-link"
                    >
                        Vote
                    </NavLink>
                </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavigationBar;