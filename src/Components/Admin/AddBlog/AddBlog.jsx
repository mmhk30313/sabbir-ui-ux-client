import React, { useContext, useState } from 'react';
import uploadIcon from '../../../images/icon/upload.png';
// import Modal from 'react-bootstrap/Modal';
import { UserContext } from '../../../App';

const AddBlog = () => {
    const [loggedInUser] = useContext(UserContext);
    const [modalShow, setModalShow] = useState(false);
    const [addedBlog, setAddedBlog] = useState({});
    const handleSubmit = (evt) =>{
        evt.preventDefault();
        const liveLink = evt.target.liveLink.value;
        const blogName = evt.target.blogName.value;
        const imgData = new FormData();
        imgData.set("key", "4ddc64c369e800157d688eb222ce91af");
        imgData.append('image', evt.target.file.files[0]);
        fetch("https://api.imgbb.com/1/upload", {
            method: 'POST',
            body: imgData,
        })
        .then(res => res.json())
        .then(data => {
            const blogDetails = {
                admin: loggedInUser.displayName,
                blogName,
                liveLink,
                imgUrl: data.data.display_url
            }
            setAddedBlog(blogDetails);
            fetch("https://my-all-works-server.herokuapp.com/add-blog", {
                method: "POST",
                body: JSON.stringify(blogDetails),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
        // .....MODAL Bootstrap......
                // setModalShow(true);
                evt.target.reset();
            })
        })
        evt.target.reset();
    }    
    return (
        <>
            <div className="mt-4 p-4">
                <form onSubmit={handleSubmit} className="card shadow py-3 px-3" id="useForm">
                    <div className="row">
                        <div className="col-md-12 form-group">
                            <label>Blog Name</label>
                            <textarea className="form-control" name="blogName" cols="15" rows="2" placeholder="Enter Name" required></textarea>
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Blog Live Link</label>
                            <textarea name="liveLink" id="live-link" className="form-control" cols="15" rows="5" placeholder="Enter Live Link" required></textarea>
                        </div> 
                        <div className="col-md-6 form-group">
                            <label>Image</label>
                            <input type="file" name="file" className="d-none" id="upload-file" required/><br/>
                            <label className='btn btn-outline-success  form-control overflow-hidden' id="upload-label" htmlFor="upload-file" style={{width: 'fit-content'}} title='Upload image'><img style={{height: '30px'}} src={uploadIcon} alt=""/> <span className='image-upload'>Upload image</span></label>
                        </div>
                    </div>
                </form>
                <div className='d-flex'>
                    <button className="btn btn-info my-3 ml-auto px-4" type="submit" form="useForm" >Submit</button>
                    {/* <MyVerticallyCenteredModal
                        addedBlog={addedBlog}
                        user={loggedInUser}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    /> */}
                </div>
            </div>
        </>
    );
};

// function MyVerticallyCenteredModal(props) {
//     const addedBlog = props.addedBlog;
//     const {user} = props;
//     return (
//       <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton>
//           <Modal.Title  id="contained-modal-title-vcenter">
//             <div className="d-flex justify-content-between">
//                 <p className="mt-3">WELCOME!!!</p>
//                 <img className="rounded rounded-circle" src={user.photoURL} alt=""/>
//             </div>
//             <p className="text-warning">YOUR BLOG IS UPLOADED</p>
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div className="row justify-content-around align-items-center mx-auto">
//               <div className="details col-md-8 align-items-center">
//                   <h5><span className="text-info">Blog Name:</span> {addedBlog.blogName}</h5>
//               </div>
//               <div className="image col-md-4 text-right">
//                   <img className="img-fluid w-" src={addedBlog.imgUrl} alt=""/>
//               </div>
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <button className="btn btn-danger" onClick={props.onHide}>Back</button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }
export default AddBlog;