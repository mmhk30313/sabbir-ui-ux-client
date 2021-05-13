import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink, useHistory } from 'react-router-dom';
import './MyNav.css';
const MyNav = () => {
    return (
        <div className="d-flex justify-content-center border-bottom border-dark App fixed-top">
            <Navbar id="navbar-example2" collapseOnSelect className="container"  expand="lg" variant="light">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <div id="desktop-link" className="d-flex flex-row nav-link text-center">
                            <a href="#home-1" className="py-1 bd-highlight text-decoration-none text-light">Home</a>
                            <a href="#about-1" className="py-1 bd-highlight text-decoration-none text-light">About</a>
                            <a href="#projects-1" className="py-1 bd-highlight text-decoration-none text-light">Projects</a>
                            <a href="#blogs-1" className="py-1 bd-highlight text-decoration-none text-light">Blogs</a>
                            <a href="#testimonials-1" className="py-1 bd-highlight text-decoration-none text-light">Testimonials</a>
                            <a href="#contact-1" className="py-1 bd-highlight text-decoration-none text-light">Contact</a>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {/* <div id="left-mobile" className="mobile-left border-right border-dark">
                    <h6 style={{width: '150px'}} className='text-light px-4'>MEHEDI HASAN</h6>
                    <div id="my-link" className="d-flex flex-column nav-link text-center">
                        <a href="#home-2" className="py-1 bd-highlight text-decoration-none text-light">Home</a>
                        <a href="#about-2" className="py-1 bd-highlight text-decoration-none text-light">About</a>
                        <a href="#projects-2" className="py-1 bd-highlight text-decoration-none text-light">Projects</a>
                        <a href="#blogs-2" className="py-1 bd-highlight text-decoration-none text-light">Blogs</a>
                        <a href="#testimonials-2" className="py-1 bd-highlight text-decoration-none text-light">Testimonials</a>
                        <a href="#contact-2" className="py-1 bd-highlight text-decoration-none text-light">Contact</a>
                    </div>
            </div> */}
        </div>
    );
};

export default MyNav;