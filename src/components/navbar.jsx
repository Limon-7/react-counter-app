import React from "react";

// Stateless Fuctional Component
const Navbar = ({ totalCounters }) => {
    console.log("Nav-rendered");
    return (
        <nav className="navbar navbar-light bg-secondary">
            <a className="navbar-brand" link="#">
                Navbar
                <span className="badge badge-pill badge-primary">
                    {totalCounters}
                </span>
            </a>
        </nav>
    );
};

export default Navbar;
