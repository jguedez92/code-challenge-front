import React from 'react'

import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center shadow">
            <div className="col-md-12 d-flex justify-content-center">
                <div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item ">
                                <NavLink to='/' exact className="nav-link" >
                                    Home
                                </NavLink>
                            </li>
                            <li class="nav-item nav-title">
                                <NavLink to='/users' exact className="nav-link" >
                                    Users
                                </NavLink>
                            </li>
                            <li class="nav-item nav-title">
                                <NavLink to='/posts' exact className="nav-link" >
                                    Posts
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
