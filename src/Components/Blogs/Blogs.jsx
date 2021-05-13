import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import './Blogs.css';
import ShowBlogs from './ShowBlogs';
// const blogs = [
//     {
//         id: 1,
//         name: "Blog-1",
//         img: "",
//         url: ""
//     },
//     {
//         id: 2,
//         name: "Blog-2",
//         img: "",
//         url: ""
//     },
//     {
//         id: 3,
//         name: "Blog-3",
//         img: "",
//         url: ""
//     },
// ]
const Blogs = () => {
    const [loggedInUser, setLoggedInUser, allProjects, setAllProjects, blogs] = useContext(UserContext);
    return (
        <div className="container main-div">
            <h3 className="font-weight-bold header">BLOGS</h3>
            <div className="row justify-content-center project-type">
                {
                    blogs.map(blog => <ShowBlogs key={blog._id} blog={blog.blog} />)
                }
            </div>
        </div>
    );
};

export default Blogs;