import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';
import HelloFreshLogo from '../../assets/logos/Hello_Fresh_logo.avif';

const Navbar: React.FC = () => {
    const location = useLocation();

    // Function to determine if the current link is active
    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="navbar">
            <div className="logo">
                <img src={HelloFreshLogo} alt="HelloFresh" />
            </div>
            {location.pathname !== '/departments' && (
                <ul className="nav-links">
                    <li className={isActive('/') ? 'active' : ''}>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className={isActive('/schedule') ? 'active' : ''}>
                        <Link to="/schedule">Schedule</Link>
                    </li>
                    <li className={isActive('/people') ? 'active' : ''}>
                        <Link to="/people">People</Link>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
