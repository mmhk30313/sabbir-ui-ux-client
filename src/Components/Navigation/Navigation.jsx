import React, { useState } from 'react';
import './Navigation.css';
import { MdSort } from "react-icons/md";
import { FaFacebookF, FaGithub, FaLinkedin, FaWeebly } from "react-icons/fa";
import mahadi from '../../images/icon/MMHK.jpg';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Blogs from '../Blogs/Blogs';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import MyNav from '../MyNav/MyNav';
const Navigation = () => {
    const [open, setOpen] = useState(true);
    const openNav = () => {
        // console.log("open")
        setOpen(true);
        document.getElementById("sideBar-mobile").style.transform = "translateX(0)";
        document.getElementById('topBar').style.transform = "translateX(200px)";
        document.getElementById("main-mobile").style.opacity = "0.4";
        document.getElementById("main-mobile").style.transform = "translateX(200px)";
    }
    
    const closeNav = () =>{
        // console.log("close")
        setOpen(false);
        
        document.getElementById("sideBar-mobile").style.transform = "translateX(-200px)";
        document.getElementById("sideBar-mobile").style.borderRight = "none";
        document.getElementById('topBar').style.transform = "translateX(0)";
        document.getElementById("main-mobile").style.transform = "translateX(0)";
        document.getElementById("main-mobile").style.opacity = "1";
        document.getElementById("main-mobile").style.margin= "0 auto";
    }
    const setOpenNav = (flag) => {
        setOpen(flag);
        if(flag){
            openNav();
        }
        else{
            closeNav();
        }
    }
    return (
        <div className="w-100 all-section">
            <div id="topBar" className="mobile App fixed-top border-bottom border-dark">
                <div className="d-flex">
                    <h1 className={`ml-2 border-none outline-none my-auto text-light`} onClick={() => setOpenNav(!open)}><MdSort/></h1> 
                    <img style={{height: '60px'}} className="img-fluid ml-2 rounded-circle" src={mahadi} alt="MMHK"/>
                    <h5 style={{fontSize: '22px'}} id="name-top" className='text-light font-weight-bold my-auto ml-2'>MEHEDI HASAN</h5>
                </div>
            </div>

            <div id="sideBar-mobile" className="sidebar-mobile border-right border-dark text-center App">
                <img style={{height: '100px',width: '100px'}} className="img-fluid mb-3 rounded-circle" src={mahadi} alt="MMHK"/>
                <h5 className='text-light name-side px-4'>MEHEDI HASAN</h5>
                <div id="my-link" className="d-flex flex-column nav-link text-center">
                    <a onClick={() => closeNav()} href="#home-2" className="py-1 bd-highlight text-decoration-none text-light">Home</a>
                    <a onClick={() => closeNav()} href="#about-2" className="py-1 bd-highlight text-decoration-none text-light">About</a>
                    <a onClick={() => closeNav()}href="#projects-2" className="py-1 bd-highlight text-decoration-none text-light">Projects</a>
                    <a onClick={() => closeNav()} href="#blogs-2" className="py-1 bd-highlight text-decoration-none text-light">Blogs</a>
                    <a onClick={() => closeNav()}href="#testimonials-2" className="py-1 bd-highlight text-decoration-none text-light">Testimonials</a>
                    <a onClick={() => closeNav()} href="#contact-2" className="py-1 bd-highlight text-decoration-none text-light">Contact</a>
                </div>
                <div className="d-flex flex-row justify-content-between px-4 mt-5">
                    <a style={{fontSize: '14px'}} href="https://www.facebook.com/MMHK30313" className="text-decoration-none text-light social-link" rel="noreferrer"><FaFacebookF/></a>
                    <a style={{fontSize: '14px'}} href="https://github.com/mmhk30313" className="text-decoration-none text-light social-link" rel="noreferrer"><FaGithub/></a>
                    <a style={{fontSize: '14px'}} href="https://www.webtalk.co/mmhk" rel="noreferrer" className="text-decoration-none text-light social-link"><FaWeebly/></a>
                    <a style={{fontSize: '14px'}} href="https://www.linkedin.com/in/mehedihasan30313" className="text-decoration-none text-light social-link" rel="noreferrer"><FaLinkedin/></a>
                </div>
                <p style={{fontSize: '15px'}} className="text-center text-light mt-3 footer-des"><small>@ {new Date().getFullYear()} MEHEDI HASAN</small></p>
            </div>
            <div className="top-desktop App">
                <MyNav/>
            </div>
            {/* <div id="sideBar-desktop" className="sidebar-desktop border-right border-dark App">
                <img style={{height: '140px'}} className="img-fluid mx-auto d-flex justify-content-center my-2 rounded-circle" src={mahadi} alt="MMHK"/>
                <h4 className='text-light name-side text-center'>MEHEDI HASAN</h4>
                <div className="d-flex justify-content-center text-center">
                    <div id="my-link" className="d-flex flex-column nav-link">
                        <a className="py-2 bd-highlight text-decoration-none text-light" href="#home-1">Home</a>
                        <a className="py-2 bd-highlight text-decoration-none text-light" href="#about-1">About</a>
                        <a className="py-2 bd-highlight text-decoration-none text-light" href="#projects-1">Projects</a>
                        <a className="py-2 bd-highlight text-decoration-none text-light" href="#blogs-1">Blogs</a>
                        <a className="py-2 bd-highlight text-decoration-none text-light" href="#testimonials-1">Testimonials</a>
                        <a className="pt-2 bd-highlight text-decoration-none text-light" href="#contact-1">Contact</a>
                    </div>
                </div>
            </div> */}
            <div id="main-mobile" onClick={() => closeNav()} className="text-light border-none App">
                <section id="home-2" className="border-bottom border-dark">
                    <Home/>
                </section>
                <div id="about-2" className="border-bottom border-dark py-4">
                    <About/>
                </div>
                <div id="projects-2" className="border-bottom border-dark pb-4">
                    <Projects/>
                </div>
                <div id="blogs-2" className="border-bottom border-dark py-4">
                    <Blogs/>
                </div>
                <div id="testimonials-2" className="border-bottom border-dark py-4">
                    <Testimonials/>
                </div>
                <div id="contact-2">
                    <Contact/>
                </div>
            </div>
            <div data-spy="scroll" data-target="#navbar-example2" data-offset="0" id="main-desktop" className="text-light border-none App" >

                <section id="home-1" className="border-bottom border-dark">
                    <Home/>
                </section>
                
                <div id="about-1"className="border-bottom border-dark" >
                    <About/>
                </div>
                <div id="projects-1" className="border-bottom border-dark">
                    <Projects/>
                </div>
                <div id="blogs-1" className="border-bottom border-dark">
                    <Blogs/>
                </div>
                <div id="testimonials-1" className="border-bottom border-dark">
                    <Testimonials/>
                </div>
                <div id="contact-1">
                    <Contact/>
                </div>
            </div>
        </div>
    );
};

export default Navigation;