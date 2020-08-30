import React from 'react'

import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar shadow navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand" >Code Challenge</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item  " >
                        <NavLink to='/' exact className="nav-link" >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item  ">
                        <NavLink to='/users' exact className="nav-link" >
                            Users
                        </NavLink>
                    </li>
                    <li className="nav-item  ">
                        <NavLink to='/posts' exact className="nav-link" >
                            Posts
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
