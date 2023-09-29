import React from 'react';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
    return (
        <div>
            <nav>
                <ul style={{ display: 'flex' }}>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? 'pending' : isActive ? 'active' : ''
                        }
                    >
                        HOME
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
}

export default NavigationBar;
