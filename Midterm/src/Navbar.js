import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="nav-bar">
            <Link to={"/"}>
                <a className="nav-name" href="#">Me & the Boys</a>
            </Link>
            <ul className="nav-list">
                <Link to={"/"}>
                    <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                </Link>
                <Link to={"/about"}>
                    <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                </Link>
            </ul>
        </div>
    );
}

export default Navbar;