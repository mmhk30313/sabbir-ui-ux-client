import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { FaGithub } from 'react-icons/fa';
import { SiWebmoney } from 'react-icons/si';
import './CentralModal.css';
const CentralModal = (props) => {
    const project = props.project;
    // console.log(project);
    const {projectName, projectType, codeLink, liveLink, imgUrl} = project;

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title  id="contained-modal-title-vcenter">
            <div className="">
                <h3 className="text-success font-weight-light">{projectName}</h3>
                <p className="text-info font-italic text-italic">{projectType}</p>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
              <div className="d-flex justify-content-center">
                 <img className="img-fluid rounded modal-img" src={imgUrl} alt=""/>
              </div>
              <div className="d-flex justify-content-center mt-3">
                  <a style={{width: '110px'}} href={`${codeLink}`} className="btn btn-outline-success mr-2" target="_blank" rel="noreferrer"><FaGithub /> <small>Github</small></a>
                  <a style={{width: '100px'}} href={`${liveLink}`} className="btn btn-outline-info ml-2" target="_blank" rel="noreferrer"><SiWebmoney/> Live</a>
              </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={props.onHide}>Back</button>
        </Modal.Footer>
      </Modal>

    )
}

export default CentralModal;