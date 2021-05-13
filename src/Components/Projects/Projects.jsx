import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
// import fakeData from './fakeData';
import './Projects.css';
import ShowProjects from './ShowProjects';
const Projects = () => {
    const [active, setActive] = useState('everything');
    const [loggedInUser, setLoggedInUser, allProjects] = useContext(UserContext);
    const [projects, setProjects] = useState(allProjects);
    // console.log(allProjects)
    useEffect(()=>{
        let newProjects = [];
        const curProjects = [...allProjects];
        // console.log(active);
        // const curProjects = [...fakeData];
        if(active === 'everything'){
            setProjects(allProjects);
        }
        else if(active === 'javascript'){
            newProjects = curProjects.filter(curProject => curProject.projectType === "JavaScript");
            setProjects(newProjects)
        }
        else if(active === 'react-node'){
            newProjects = curProjects.filter(curProject => curProject.projectType === "ReactJS/NodeJS");
            setProjects(newProjects)
        }
        else if(active === "html-css"){
            newProjects = curProjects.filter(curProject => curProject.projectType === "HTML/CSS");
            setProjects(newProjects)
        }
        else{
            console.log(loggedInUser, setLoggedInUser);
        }
    },[active])

    const handleActive = (flag) =>{
        if(flag !== active){
            setProjects([]);
        }
        setActive(flag);
    }
    // console.log(active);
    
    
    return (
        <div className="container main-div projects">
            <h3 className="font-weight-bold header">PROJECTS</h3>
            <div id="project-type" className="row mx-auto d-flex justify-content-center project-type mt-5">
                <div onClick={() => handleActive("everything")} style={{height: 'fit-content'}} className={`col-md-3 card border-dark rounded btn align-items-center py-1 ${active === 'everything' ? "active-"+active : ""}`}>
                    <b>Everything</b>
                    {/* <b className="mirror-1 text-bold align-items-center">Everything</b> */}
                </div>
                <div onClick={() => handleActive("react-node")} style={{height: 'fit-content'}} className={`col-md-3 card border-dark rounded btn align-items-center py-1 ${active === 'react-node' ? "active-"+active : ""}`}>
                    <b>ReactJS/NodeJS</b>
                    {/* <b className="mirror-2 text-bold align-items-center">ReactJS/NodeJS</b> */}
                </div>
                <div onClick={() => handleActive("javascript")} style={{height: 'fit-content'}} className={`col-md-3 card border-dark rounded btn align-items-center py-1 ${active === 'javascript' ? "active-"+active : ""}`}>
                    <b>JavaScript</b>
                </div>
                <div onClick={() => handleActive("html-css")} style={{height: 'fit-content'}} className={`col-md-3 card  border-dark rounded btn align-items-center py-1 ${active === 'html-css' ? "active-"+active : ""}`}>
                    <b>HTML / CSS</b>
                </div>
            </div>
            <div id="project-type" className="row justify-content-center project-type">
                {
                    active === "everything" 
                    ? allProjects.map((project, idx) => <ShowProjects key={project._id} animation={`fading-up`} idx={idx} project={project}/>)

                    : projects.length > 0 && projects.map((project, idx) => <ShowProjects key={project._id} animation={`${active === "everything" ? "zoom-in" : active === "react-node" ? "flip-right" : active === "javascript" ? "fading-up" : "flip-down"}`} idx={idx} project={project}/>)
                }
            </div>
        </div>
    );
};

export default Projects;