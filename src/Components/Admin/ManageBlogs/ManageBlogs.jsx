import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import deleteIcon from '../../../images/icon/deleteIcon.png';

const ManageBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() =>{
        fetch('https://my-all-works-server.herokuapp.com/all-blogs')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[])
    const handleDeleteBlog =(id) =>{
        // console.log(id);
        fetch(`https://my-all-works-server.herokuapp.com/delete-blog/${id}`)
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            if(data.deletedCount){
                fetch('https://my-all-works-server.herokuapp.com/all-blogs')
                .then(res => res.json())
                .then(data => setBlogs(data));
            }
        })
    }
    console.log(blogs)
    return (
        <div>
            <div className="input-form p-3">
                <div className="scrolling py-3 px-4 w-100 mx-auto my-3 card shadow bg-white table-responsive">
                    <div className="table">
                        <table className="table table-hover">
                            <thead className="bg-light rounded">
                                <tr>
                                    <th scope="col" colSpan="2" className="text-muted">Admin Name</th>
                                    <th scope="col" className="text-center text-muted">Blog Link</th>
                                    <th scope="col" colSpan="4" className="text-center text-muted">Blog Name</th>
                                    <th scope="col" className="text-center text-muted">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    blogs.length > 0 && blogs.map(blog => <tr key={blog._id}>
                                        {console.log(blog.blog.blogName)}
                                       <td colSpan="2">{blog.blog.admin}</td>
                                        <td className='text-center text-dark' colSpan="4">{blog.blog.liveLink} </td>
                                        <td className='text-center text-dark'>{blog.blog.blogName}</td>
                                    
                                        <td className='text-center'>
                                            <span className='btn btn-danger round m-0 p-0' onClick={() => handleDeleteBlog(blog._id)} style={{cursor: 'pointer'}}><img style={{height: '30px'}} src={deleteIcon} alt=""/></span>
                                        </td> 
                                    </tr>)
                                }
                                    {/* Delete Button E handleDelete function diye data delete korte hobe... */}
                            </tbody>
                        </table>
                        {
                            blogs.length < 1 && <div className="text-center d-flex justify-content-center">
                            <CircularProgress color="primary" />
                        </div>
                        }
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default ManageBlogs;