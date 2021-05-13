import React, { useContext, useRef, useState } from 'react';
import uploadIcon from '../../../images/icon/upload.png';
import Modal from 'react-bootstrap/Modal';
import { UserContext } from '../../../App';

const AddProject = () => {
    const [loggedInUser, setLoggedInUser, allProjects, setAllProjects] = useContext(UserContext);
    const [modalShow, setModalShow] = useState(false);
    
    const [addedProject, setAddedProject] = useState({});
    const nameRef = useRef();
    const descriptionRef = useRef();
    const [projectType, setProjectType] = useState("Ongoing");
    const handleSubmit = (evt) =>{
        evt.preventDefault();
        const projectName = evt.target.name.value;
        const codeLink = evt.target.codeLink.value;
        const liveLink = evt.target.liveLink.value;
        // console.log(evt.target.file.files[0]);
        const imgData = new FormData();
        imgData.set("key", "4ddc64c369e800157d688eb222ce91af");
        imgData.append('image', evt.target.file.files[0]);

        fetch("https://api.imgbb.com/1/upload", {
            method: 'POST',
            body: imgData,
            // If you add this, upload won't work
            // headers: {
            //   'Content-Type': 'multipart/form-data',
            // }
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data.data.display_url);
            const projectDetails = {
                admin: loggedInUser.displayName,
                projectName,
                liveLink,
                codeLink,
                projectType,
                imgUrl: data.data.display_url
            }
            // console.log(projectDetails);
            setAddedProject(projectDetails);
            fetch('https://my-all-works-server.herokuapp.com/add-project', {
                method: "POST",
                body: JSON.stringify(projectDetails),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                // nameRef.current.value = null;
                // descriptionRef.current.value = null;

        // .....MODAL Bootstrap......
                setModalShow(true);
                evt.target.reset();
                // fetch('https://travel-solution-server.herokuapp.com/projects')
                // .then(res => res.json())
                // .then(data => {
                //         console.log(data);
                //         setAllProjects(data)
                //     }
                // )
                fetch('https://my-all-works-server.herokuapp.com/all-projects')
                .then(res => res.json())
                .then(data => {
                        // console.log(data);
                        setAllProjects(data)
                    }
                )
            })
            .catch(err => console.log(err, loggedInUser, setLoggedInUser, allProjects));
        })
        .catch(err => console.log(err))
        
    }
    const handleChange = (id) =>{
        const select = document.getElementById(id).value;
        setProjectType(select);
    }
    // console.log(projectType);
    return (
        <>
            <div className=" p-1">
                <form onSubmit={handleSubmit} className="card shadow py-3 px-3" id="useForm">
                    <div className="row">
                        <div className="col-md-6 form-group">
                            <label>Project Name</label>
                            <input ref={nameRef} type="text" className="form-control" placeholder="Enter Name" name="name" required />
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Project Live Link</label>
                            <textarea ref={descriptionRef} name="liveLink" id="live-link" className="form-control" cols="15" rows="1" placeholder="Enter Live Link" required></textarea>
                        </div> 
                        <div className="col-md-6 form-group">
                            <label >Project Code Link</label>
                            <textarea name="codeLink" id="code-link" className="form-control" cols="15" rows="1" placeholder="Enter Code Link" required></textarea>
                        </div> 
                        <div className="col-md-3 form-group">
                            <label>Project Type</label><br/>
                            <select id="project-type" style={{cursor: 'pointer'}} className={`border-none form-select form-select-lg p-2 rounded`} aria-label=".form-select-sm example" onChange={() => handleChange("project-type")}>
                                                {/* <option defaultValue>{project.status}</option> */}

                                <option className="bg-Pending text-Pending" value="Ongoing" defaultValue>Ongoing</option>
                                <option className="bg-Pending text-Pending" value="HTML/CSS">HTML / CSS</option>
                                <option className="bg-Ongoing text-Ongoing" value="JavaScript">JavaScript</option>
                                <option className="bg-Done text-Done" value="ReactJS/NodeJS">ReactJS / NodeJS</option>
                            </select>
                        </div>
                        <div className="col-md-3 form-group">
                            <label>Image</label>
                            <input type="file" name="file" className="d-none" id="upload-file" required/><br/>
                            <label className='btn btn-outline-success  form-control overflow-hidden' id="upload-label" htmlFor="upload-file" style={{width: 'fit-content'}} title='Upload image'><img style={{height: '30px'}} src={uploadIcon} alt=""/> <span className='image-upload'>Upload image</span></label>
                        </div>
                        
                    </div>
                </form>
                <div className='d-flex'>
                    <button className="btn btn-info my-3 ml-auto px-4" type="submit" form="useForm" >Submit</button>
                    <MyVerticallyCenteredModal
                        addedProject={addedProject}
                        user={loggedInUser}
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
            </div>
        </>
    );
};

function MyVerticallyCenteredModal(props) {
    const addedProject = props.addedProject;
    const {user} = props;
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title  id="contained-modal-title-vcenter">
            <div className="d-flex justify-content-between">
                <p className="mt-3">WELCOME!!!</p>
                <img className="rounded rounded-circle" src={user.photoURL} alt=""/>
            </div>
            <p className="text-warning">YOUR project IS UPLOADED</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row justify-content-around align-items-center mx-auto">
              <div className="details col-md-8 align-items-center">
                  <h5>Project Name: <span className="text-success">{addedProject.projectName}</span></h5>
                  <h6>Type: <span className="text-warning"> {addedProject.projectType}</span></h6>
                  {/* <p className="text-success font-weight-bold">Description: {addedProject.description}</p> */}
              </div>
              <div className="image col-md-4 text-right">
                  <img className="img-fluid w-" src={addedProject.imgUrl} alt=""/>
              </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={props.onHide}>Back</button>
        </Modal.Footer>
      </Modal>
    );
  }
export default AddProject;