import React, { useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const MakeAdmin = () => {
    const emailRef = useRef();
    const [adminEmail, setAdminEmail] = useState({});
    const [modalShow, setModalShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const handleSubmit = (evt) =>{
        evt.preventDefault();
        setErrorMessage(" ");
        const email = evt.target.email.value;
        // console.log(email);
        fetch(`https://my-all-works-server.herokuapp.com/admin-email/${email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data){
              setErrorMessage(false);
              setAdminEmail(data);
              setModalShow(true);
            }
            else{
              setErrorMessage("Sorry!!! the owner of this email is already an admin");
              setAdminEmail({})
              setModalShow(false);
            }
        })
        // emailRef.current.value = null;
    }
    return (
        <div className="">
            <form onSubmit={handleSubmit} className="card p-1 make-admin-form py-3 rounded mx-auto">
                <div className="d-flex justify-content-center py-4">
                    <input type="email" ref={emailRef} name="email" placeholder="Enter email" className="form-control" required/>
                    <input className="btn px-2 btn-success rounded ml-1" type="submit" value="Submit"/>
                </div>
                {
                  errorMessage && <p className="text-danger text-center"><small>{errorMessage}</small></p>
                }
            </form>
            <MyVerticallyCenteredModal
                admin={adminEmail}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

function MyVerticallyCenteredModal(props) {
    const {admin} = props;
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title  id="contained-modal-title-vcenter">
            <p className="mt-3">WELCOME!!!</p>
            <p className="text-warning">YOU CRATED NEW ADMIN</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center text-info">
              <p>Your new admin email is <span className="text-danger">"{admin.email}"</span></p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-success" onClick={props.onHide}>Back</button>
        </Modal.Footer>
      </Modal>
    );
}
export default MakeAdmin;