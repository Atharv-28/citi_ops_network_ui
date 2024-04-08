import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../styles/nav.css";

const Navbar = () => {
    return (
        <>
            <nav className="nav">
                <ul className="navcontainer">
                    <li className="navelement">
                    <Link className="navtxt" to="/">Dyson</Link>
                    </li>
                    <li className="navelement">
                        <Link className="navtxt" to="./NetworkAutomation">Network Automation</Link>
                    </li>
                    <li className="navelement">
                        <input className="searchBar" type="search" placeholder="🔍 Search" />
                    </li>
                    <li className="navelement">
                    <Link className="navtxt" to="/"><img className="profImg" src="../logo.svg" /></Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default Navbar;
