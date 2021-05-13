import React, { useState } from 'react';
import CentralModal from '../CentralModal/CentralModal';

const ShowProjects = ({project, idx, animation}) => {
    const [modalShow, setModalShow] = useState(false);
    // console.log(project);
    return (
        <>
            <div id="desktop-items" className={`${animation === "fading-up" ? "zoom-in" : animation} col-md-4 my-2 text-dark text-center`}>
                <div style={{height: '350px'}} data-aos={`${animation === "fading-up" && ("zoom-out-up") || (idx % 2 === 0 ? "zoom-in" : "zoom-out")}`} data-aos-duration="1500" className="card project-card">
                    <img src={project.imgUrl} style={{opacity: `${project.projectType === 'Ongoing' ? '0.3' : '1' }`}} className={`h-100 w-100`} alt=""/>
                    <div className={`${project.projectType === "Ongoing" ? "on-going" : "learn-more"} px-3 pt-5 text-center`}>
                        {
                            project.projectType === "Ongoing" 
                            ? <>
                                <h3 className="text-light mt-5 pt-4 text-uppercase">{project.projectType}</h3>
                                
                            </>
                            :  <>
                                <h6 className="text-light mt-5">{project.projectName}</h6>
                                <p><small className="text-light font-weight-bold">{project.projectType}</small></p>
                                <button onClick={() => setModalShow(true)} className="my-1 btn hire-me" >
                                    <span className="content font-weight-bold py-0 px-2">LEARN MORE</span>
                                    <span className="hire-me-design"></span>
                                </button>
                            </>
                        }
                        <CentralModal
                            project={project}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" id="mobile-items" className={`${animation === "fading-up" ? "zoom-in" : animation} col-md-4 my-3 text-dark text-center card p-0 project-card`}>
                <div style={{height: '350px'}} className="">
                    <img src={project.imgUrl} style={{opacity: `${project.projectType === 'Ongoing' ? '0.3' : '1' }`}} className={`h-100 w-100`} alt=""/>
                    <div className={`${project.projectType === "Ongoing" ? "on-going" : "learn-more"} px-3 pt-5 text-center`}>
                        {
                            project.projectType === "Ongoing" 
                            ? <>
                                <h3 className="text-light mt-5 pt-4 text-uppercase">{project.projectType}</h3>
                                    
                            </>
                            :  <>
                                <h6 className="text-light mt-5">{project.projectName}</h6>
                                <p><small className="text-light font-weight-bold">{project.projectType}</small></p>
                                <button onClick={() => setModalShow(true)} className="my-1 btn hire-me" >
                                    <span className="content font-weight-bold py-0 px-2">LEARN MORE</span>
                                    <span className="hire-me-design"></span>
                                </button>
                            </>
                        }
                        <CentralModal
                            project={project}
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShowProjects;