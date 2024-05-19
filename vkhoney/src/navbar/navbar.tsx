"use client"

import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';



const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar navbar-expand-lg bg-dark navbar-dark ${isOpen ? 'show' : ''}`}>
            <div className="container">
                <a href="#" className="navbar-brand fw-bolder">VK Restaurant</a>
                <button
                    type="button"
                    onClick={toggleMenu}
                    className="navbar-toggler"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link active">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#pricing" className="nav-link">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a href="#customers" className="nav-link">Customers</a>
                        </li>
                        <li className="nav-item">
                            <a href="#aboutus" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#FAQ" className="nav-link">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar