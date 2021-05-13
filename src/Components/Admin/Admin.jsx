import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faPlus, faUserAlt, faSignOutAlt, faDove, faBlog } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../App';
import './Admin.css';
// import AddService from './AddService/AddService';
// import projectList from './projectList/projectList';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import AllProjects from './AllProjects/AllProjects';
import AddProject from './AddProject/AddProject';
import AddBlog from './AddBlog/AddBlog';
import { ImBlog } from 'react-icons/im';
import ManageBlogs from './ManageBlogs/ManageBlogs';
import ManageProjects from './ManageProjects/ManageProjects';


const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(loggedInUser)
    const [adminWork, setAdminWork] = useState("Project List");
    const [projectList, setProjectList] = useState('activate');
    const [addProject, setAddProject] = useState('');
    const [addBlog, setAddBlog] = useState('');
    const [manageProjects, setManageProjects] = useState("");
    const [manageBlogs, setManageBlogs] = useState("");
    const [makeAdmin, setMakeAdmin] = useState("");
    const [logout, setLogout] = useState("");
    const handleAdminWork = (work) =>{
        // console.log(work);
        if(work==="Project List"){
            setProjectList('activate');
            setAddProject("");
            setAddBlog("");
            setManageProjects("");
            setManageBlogs("");
            setMakeAdmin("");
            setLogout("")
            
        }
        else if(work === 'Add Project'){
            setProjectList("");
            setAddProject("activate");
            setAddBlog("");
            setManageProjects("");
            setManageBlogs("");
            setMakeAdmin("");
            setLogout("")
        }
        else if(work === 'Add Blog'){
            setProjectList("");
            setAddProject("");
            setAddBlog("activate");
            setManageProjects("");
            setManageBlogs("");
            setMakeAdmin("");
            setLogout("")
        }
        else if(work=== 'Manage Services'){
            setProjectList("");
            setAddProject("");
            setAddBlog("");
            setManageProjects("activate");
            setManageBlogs("");
            setMakeAdmin("");
            setLogout("")
        }
        else if(work=== 'Manage Services'){
            setProjectList("");
            setAddProject("");
            setAddBlog("");
            setManageProjects("");
            setManageBlogs("activate");
            setMakeAdmin("");
            setLogout("")
        }
        else if(work === 'Make Admin'){
            setProjectList("");
            setAddProject("");
            setAddBlog("");
            setManageProjects("");
            setManageBlogs("");
            setMakeAdmin("activate");
            setLogout("")
        }
        else if(adminWork === "logout"){
            setProjectList("");
            setAddProject("");
            setAddBlog("");
            setManageProjects("");
            setManageBlogs("");
            setMakeAdmin("");
            setLogout("activate")
        }
        setAdminWork(work);
    }
    const history = useHistory();
    const handleLogout = () =>{
        setLoggedInUser({});
        history.push('/');
    }
    return (
        <div className="m-0 bg-light text-dark">
            <div className='row w-100 mx-auto'>
                <div className="col-md-3 p-5 bg-light">
                    <Link to='/' ><img style={{height: '60px',width: '60px'}} className="rounded-circle mx-3 img-fluid" src={loggedInUser.photoURL} alt=""/></Link>
                    <div className="mt-4">
                        <p className={`w-100 py-2  hover ${projectList}`} onClick={() =>handleAdminWork("Project List")}><FontAwesomeIcon icon={faDove}/><span> Project List</span></p>
                        <p className={`w-100 py-2  hover ${addProject}`} onClick={() =>handleAdminWork("Add Project")}><FontAwesomeIcon icon={faPlus} /><span> Add Project</span></p>
                        <p className={`w-100 py-2  hover ${addBlog}`} onClick={() =>handleAdminWork("Add Blog")}><FontAwesomeIcon icon={faBlog} /><span> Add Blog</span></p>
                        <p className={`w-100 py-2  hover ${makeAdmin}`} onClick={() =>handleAdminWork("Make Admin")}><FontAwesomeIcon icon={faUserAlt}/><span> Make Admin</span></p>
                        <p className={`w-100 py-2  hover ${manageProjects}`} onClick={() =>handleAdminWork("Manage Services")}><FontAwesomeIcon icon={faBorderAll}/><span> Manage Projects</span></p>
                        <p className={`w-100 py-2  hover ${manageBlogs}`} onClick={() =>handleAdminWork("Manage Blogs")}><ImBlog/><span> Manage Blogs</span></p>
                        <p className={`w-100 py-2  hover ${logout}`} onClick={() =>handleLogout()}><FontAwesomeIcon icon={faSignOutAlt}/><span> Logout</span></p>
                    </div>
                </div>
                <div style={{height: `${adminWork === 'Add Project' || adminWork === "Make Admin" ? "99.8vh" : "fit-content"}`}} className="col-md-9 px-0 pt-5 border-left border-dark">
                    <div className="admin-header d-flex justify-content-between mt-5 mb-2 px-3">
                        <h5 className="admin-work-title">{adminWork}</h5>
                        <h5 className="admin-name">{loggedInUser.displayName}</h5>
                    </div>
                    <div style={{height: `${adminWork === 'Add Project' || adminWork === "Make Admin" ? "77.8vh" : "fit-content"}`}} className="admin-work bg-light w-100 mx-auto p-3 border-top border-dark">
                        {/* <AddService/> */}
                        {
                            adminWork === 'Project List' ? <AllProjects/>
                            : adminWork === 'Add Project' ? <AddProject/>
                            : adminWork === 'Add Blog' ? <AddBlog/>
                            : adminWork === 'Make Admin' ? <MakeAdmin/>
                            : adminWork === "Manage Services" ? <ManageProjects/>
                            : adminWork === "Manage Blogs" ? <ManageBlogs/>
                            : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;