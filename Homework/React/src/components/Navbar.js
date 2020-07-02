import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="nav-bar">
            <a className="nav-name" href="#">React Strap</a>
            <ul className="nav-list">
                <Link to={"/"}>
                    <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
                </Link>
                <Link to={"/about"}>
                    <li className="nav-item"><a href="#home" className="nav-link">About</a></li>
                </Link>
                <Link to={"/contact"}>
                    <li className="nav-item"><a href="#home" className="nav-link">Contact</a></li>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;