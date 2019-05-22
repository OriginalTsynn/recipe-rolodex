import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <NavLink to= "/">
                    <h1>Recipe Rolodex</h1>
                </NavLink>
                <NavLink to= "/recipes/create">
                    <h2>Create New Recipe</h2>
                </NavLink>
            </nav>  
        </div>
    );
};

export default Navbar;