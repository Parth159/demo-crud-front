import React from 'react'
import { BrowserRouter, Link, Route, Routes, matchRoutes, useLocation } from 'react-router-dom';
import {mainRoutes as routes} from 'config/routing';
import { useState, useEffect } from 'react';
const Navbar = () => {
    const {pathname} = useLocation();
    return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to={routes.userList.path} className={`nav-link ${pathname === routes.userList.path ? 'active' : ''}`} >Users</Link>
                </li>
                <li className="nav-item">
                    <Link to={routes.addUser.path} className={`nav-link ${pathname === routes.addUser.path ? 'active' : ''}`} >Add User</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}
export default Navbar;
