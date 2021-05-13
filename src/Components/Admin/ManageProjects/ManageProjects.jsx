import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import deleteIcon from '../../../images/icon/deleteIcon.png';
const ManageProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() =>{
        fetch('https://my-all-works-server.herokuapp.com/all-projects')
        .then(res => res.json())
        .then(data => {
            const curData = data.filter(d => d.projectType !== "Ongoing");
            const onGoingData = data.filter(d => d.projectType === "Ongoing");
            let stack = [];
            curData.map(cd => stack.unshift(cd));
            onGoingData.map(od => stack.unshift(od));
            setProjects(stack)
            // setProjects(data)
        });
    },[])
    const handleDeleteProject =(id) =>{
        // console.log(id);
        fetch(`https://my-all-works-server.herokuapp.com/delete-project/${id}`)
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            if(data.deletedCount){
                fetch('https://my-all-works-server.herokuapp.com/all-projects')
                .then(res => res.json())
                .then(data => setProjects(data));
            }
        })
    }
    return (
        <div>
            <div className="input-form p-1">
                <div className="scrolling py-3 px-4 w-100 mx-auto my-3 card shadow bg-white table-responsive">
                    <div className="table">
                        <table className="table table-hover">
                            <thead className="bg-light rounded">
                                <tr>
                                    <th scope="col" colSpan="2" className="text-muted">Admin Name</th>
                                    <th scope="col" colSpan="4" className="text-center text-muted">Project Name</th>
                                    <th scope="col" className="text-center text-muted">Project Type</th>
                                    <th scope="col" className="text-center text-muted">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    projects && projects.map(project => <tr key={project._id}>
                                        <td colSpan="2">{project.admin}</td>
                                        <td className='text-center' colSpan="4">{project.projectName}</td>
                                        {/* <td className='text-center' colSpan="4">{project.description.substr(0, 25)+"..."}</td> */}
                                        <td className='text-center'> {project.projectType}</td>
                                        <td className='text-center'>
                                            <span className='btn btn-danger round m-0 p-0' onClick={() => handleDeleteProject(project._id)} style={{cursor: 'pointer'}}><img style={{height: '30px'}} src={deleteIcon} alt=""/></span>
                                        </td>
                                    </tr>)
                                }
                                    {/* Delete Button E handleDelete function diye data delete korte hobe... */}
                            </tbody>
                        </table>
                        {
                            projects.length === 0 && <div className="text-center d-flex justify-content-center">
                            <CircularProgress color="primary" />
                        </div>
                        }
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default ManageProjects;