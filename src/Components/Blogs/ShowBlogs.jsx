import React from 'react';

const ShowBlogs = ({blog}) => {
    // console.log(blog);
    return (
        <>
            <div data-aos="zoom-out-up" data-aos-duration="1500" id="desktop-items" className="col-md-4 my-2 text-center text-dark blog-card">
                <div style={{height: '350px'}} className="card">
                    <img src={blog.imgUrl} className="h-100 w-100" alt=""/>
                    <div className="read text-center pt-5">
                        <h6 className="text-light mt-5">{blog.blogName}</h6>
                        <a href={`${blog.liveLink}`} target="_blank" className="my-3 btn hire-me" rel='noreferrer'>
                            <span className="content font-weight-bold py-0 px-2">READ</span>
                            <span className="hire-me-design"></span>
                        </a>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="1500" id="mobile-items" className="col-md-4 my-3 text-dark text-center">
                <div style={{height: '350px'}} className="card p-0 blog-card">
                    <img src={blog.imgUrl} className="h-100 w-100" alt=""/>
                    <div className="read text-center pt-5">
                        <h6 className="text-light mt-5">{blog.blogName}</h6>
                        <a href={`${blog.liveLink}`} target="_blank" className="my-3 btn hire-me" rel='noreferrer'>
                            <span className="content font-weight-bold py-0 px-2">READ</span>
                            <span className="hire-me-design"></span>
                        </a>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ShowBlogs;