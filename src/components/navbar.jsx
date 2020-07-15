import React, { Component } from "react";

// Stateless Fuctional Component
const Navbar = ({ totalCounters }) => {
    return (
        <nav className="navbar navbar-light bg-secondary">
            <a className="navbar-brand" href="#">
                Navbar
                <span className="badge badge-pill badge-primary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
};

export default Navbar;
