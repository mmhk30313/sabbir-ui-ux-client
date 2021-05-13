import React, { useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { useEffect } from 'react'
import { useContext } from 'react';
import { UserContext } from '../../../App';
const AllProjects = () => {
    const [loggedInUser, setLoggedInUser, allProjects, setAllProjects] = useContext((UserContext));
    const [status, setStatus] = useState("");
    useEffect(() =>{
        console.log(status);
        fetch("https://my-all-works-server.herokuapp.com/all-projects")
        .then(res => res.json())
        .then(data =>{
            console.log(status);
            // console.log(data);
            const curData = data.filter(d => d.projectType !== "Ongoing");
            const onGoingData = data.filter(d => d.projectType === "Ongoing");
            let stack = [];
            curData.map(cd => stack.unshift(cd));
            onGoingData.map(od => stack.unshift(od));
            setAllProjects(stack);
            // setAllProjects(data);
        })
        .catch(err => console.log(err, loggedInUser, setLoggedInUser))
    },[status])
    // console.log(allProjects)
    const handleStatusChange = (id)=>{
        const statusId = document.getElementById(`status-${id}`);
        // console.log(id+" => "+ statusId.value);
        setStatus(statusId.value);
        statusId.classList.remove(...statusId.classList);
        statusId.classList.add("bg-"+statusId.value, "border-none", "form-select", "form-select-lg", "p-2", "rounded");
        fetch(`https://my-all-works-server.herokuapp.com/update-project-status/${id}`, {
            method: "POST",
            body: JSON.stringify({projectType: statusId.value}),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            if(!data){
                console.log(data);
            }
        })
    }
    // console.log(allProjects+"");
    return (
        <div>
            <div className="input-form p-2">
                <div className="scrolling-off py-3 px-4 w-100 mx-auto my-3 card shadow bg-white table-responsive">
                    <div className="table">
                        <table className="table table-hover">
                            <thead className="bg-light rounded">
                                <tr>
                                    <th scope="col" colSpan="2" className="text-muted">Project Name</th>
                                    <th scope="col" colSpan="4" className="text-center text-muted">Project Link</th>
                                    <th scope="col" colSpan="4" className="text-center text-muted">Project Code</th>
                                    <th scope="col" className="text-center text-muted">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allProjects.length > 0 && allProjects.map(project => <tr key={project._id}>
                                        <td colSpan="2">{project.projectName}</td>
                                        <td className='text-center' colSpan="4">{project.liveLink}</td>
                                        <td className='text-center' colSpan="4">{project.codeLink}</td>
                                        <td className='text-center'>
                                            <select onChange={() =>handleStatusChange(project._id)} id={`status-${project._id}`} style={{cursor: 'pointer'}} className={`border-none form-select form-select-lg p-2 rounded bg-${project.projectType}`} aria-label=".form-select-sm example">
                                                <option defaultValue>{project.projectType}</option>
                                                <option className="bg-Ongoing text-Ongoing" value="Ongoing">Ongoing</option>
                                                <option className="bg-Pending text-Pending" value="ReactJS/NodeJS">ReactJS/NodeJS</option>
                                                <option className="bg-Pending text-Pending" value="HTML/CSS">HTML/CSS</option>
                                                <option className="bg-Done text-Done" value="JavaScript">JavaScript</option>
                                            </select>
                                        </td>
                                    </tr>)
                                }
                                    {/* Delete Button E handleDelete function diye data delete korte hobe... */}
                            </tbody>
                        </table>
                    </div>
                    {
                        allProjects.length === 0 && <div className="text-center d-flex justify-content-center">
                        <CircularProgress color="secondary" />
                    </div>
                    }
                </div>
            </div> 
        </div>
    );
};

export default AllProjects;