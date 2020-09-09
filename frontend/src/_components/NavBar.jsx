import React, { useState, useEffect } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { Role } from '../_helpers';
import { accountService } from '../_services';

function NavBar() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const subscription = accountService.user.subscribe(x => setUser(x));
        return subscription.unsubscribe;
    }, []);

    // only show nav when logged in
    if (!user) return LoggedOutNav();

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="#" id="logo">React Sample App</Navbar.Brand>
                <Navbar.Toggle aria-controls="mainNavbar" />
                <Navbar.Collapse id="mainNavBar">
                    <Nav className="mr-auto">
                        <NavLink exact to="/" className="nav-item nav-link">Home</NavLink>
                    </Nav>
                    <Nav className="ml-auto">
                        <NavDropdown title={`${user.firstName} ${user.lastName}`} id="mainNavDropdown">
                            <NavDropdown.Item href='/profile'>Profile</NavDropdown.Item>
                            {user.role === Role.Admin &&
                                <NavDropdown.Item href="/admin">Admin</NavDropdown.Item>
                            }
                            <NavDropdown.Divider></NavDropdown.Divider>
                            <NavDropdown.Item onClick={accountService.logout}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

function LoggedOutNav() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/" id="logo">React Sample App</Navbar.Brand>
            <Navbar.Toggle aria-controls="mainNavbar" />
            <Navbar.Collapse id="mainNavBar">
                <Nav className="mr-auto">
                    <Nav.Item>
                        <NavLink to='/account/login' className="nav-link">Login</NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink to='/account/register' className="nav-link">Register</NavLink>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );    
}

export { NavBar };