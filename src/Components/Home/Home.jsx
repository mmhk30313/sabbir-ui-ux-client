import React from 'react';
import mahadi from '../../images/icon/MMHK.jpg';
import Typewriter from 'typewriter-effect';
import './Home.css';
const Home = () => {
    return (
        <>
        <div className="container home row d-flex justify-content-center mx-auto align-content-center mx-auto">
            <div className="col-md-5  px-1">
                <div style={{width: "90%"}} className="mx-auto justify-content-center">
                <h2 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="2000" className=" hello p-2">Hello,</h2>
                <h6 className="mt-3 px-2 mb-0 font-weight-bold name ">I'm <span className="">Md. Mehedi Hasan Khan</span>,</h6>
                <div className="px-2 my-auto my-3 typeWriting"><small className="my-0 py-0 font-weight-bold">
                    <Typewriter
                        options={{
                            strings: ["A Web Designer,","A Web Programer,",'& A MERN Stack Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </small></div>
                <p className="text-justify info px-2 "><small>
                    My first priority is to design and develop attractive, responsive device friendly and user friendly websites ( landing pages, social media, blogs, portfolio & e-commerce ) for you. 
                    {/* I've designed some real life web applications in html, css & bootstrap and developed some frontend web applications adding JavaScript using <span className="text-warning"> Rest API</span> and  some full stack web applications of homepages, landing pages, social media, blogs, portfolio & e-commerce website. I've good experience of developing any <span className="text-warning"> responsive website</span> on desktop, tab & mobile views.   */}
                </small></p>
                <div className="p-2 d-flex mx-auto">
                    <div className="mr-1">
                        <a href="https://drive.google.com/file/d/1vMESrVLiHr__k5HcIJDcRWEHBXEerXMR/view?usp=sharing" target="_blank" className="my-1 btn resume px-4" rel="noreferrer" >
                            <span className='content font-weight-bold text-light'>
                                RESUME
                            </span>
                            <span className="resume-design pt-1"></span> 
                        </a>

                    </div>
                    <div id="contact-desktop" className="contact-desktop ml-2 d-flex ">
                        <a href="#contact-1" className="my-1 btn hire-me" rel="noreferrer" >
                            <span className="content font-weight-bold py-0 px-2">HIRE ME</span>
                            <span className="hire-me-design"></span>
                        </a>
                    </div>
                    <div id="contact-mobile" className="ml-1">
                        <a href="#contact-2" className="my-1 btn hire-me px-4" rel="noreferrer" >
                            <span className="content font-weight-bold">HIRE ME</span>
                            <span className="hire-me-design"></span>
                        </a>
                    </div>
                    
                </div>
                </div>
                {/* <a id="down-arrow" href="#about-1" className="my-3 mx-auto text-decoration-none scroll-down  text-light" rel="noreferrer" > l</a> */}
            </div>
        
            <div className="col-md-5 d-flex justify-content-center align-items-center">
                <img style={{ height: "250px"}} className="main-img img-fluid rounded-circle my-3 mx-auto my-auto" src={mahadi} alt="" />
            </div>
        </div>
        <div className="position-relative">
             <a href="#about-1" className="text-decoration-none text-light" rel="noreferrer"><div className="scroll-down"></div></a>
        </div>

        </>
    );
};

export default Home;