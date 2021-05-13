import React, { useContext, useState } from 'react';
import { FaFacebookF, FaGithub, FaLinkedin, FaWeebly } from "react-icons/fa";
import './Contact.css';
import emailjs from 'emailjs-com';
import Modal from 'react-bootstrap/Modal';
// import { UserContext } from '../../../App';

const Contact = () => {
    const [modalShow, setModalShow] = useState(false);
    // const [loggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({});
    const handleSubmit = (evt)=>{
        evt.preventDefault();
        // console.log(evt.target)
        const curUser = {
            from_name: evt.target.from_name.value + " " + evt.target.last_name.value,
            reply_to: evt.target.reply_to.value,
            phone: evt.target.phone.value,
            message: evt.target.message.value
        }
        console.log(curUser);
        emailjs.sendForm('itsforyou', 'template_esocsya', evt.target, 'user_z1NIIg9IrX3DIJgTQOSDK')
        .then((result) => {
            // console.log(result.text);
            if(result.text === "OK"){
                // .....MODAL Bootstrap......
                setUser(curUser);
                setModalShow(true);
            }
        }, (error) => {
            console.log(error.text);
        });
        // emailjs.sendForm('mehedi30313', 'template_t70m5mp', evt.target, 'user_FBbxAs5F2iR78ILK22cF3')
        // .then((result) => {
        //     console.log(result.text);
        // }, (error) => {
        //     console.log(error.text);
        // });
        evt.target.reset()
    }
    return (
        <div className="position-relative container main-div contact">
            <h3 className="font-weight-bold header">CONTACT</h3>
            <p style={{color: 'thistle'}} className="py-3 text-center">Let us handle your project, professionally</p>
            <form onSubmit={handleSubmit} className="bg-transparent home-form my-3">
                <div className="row justify-content-center">
                    <div className="col-md-6 form-group">
                        <input type="text" name="from_name" placeholder="First Name" className="form-control" required/>
                    </div>
                    <div className="col-md-6 form-group">
                        <input type="text" name="last_name" placeholder="Last Name" className="form-control" required/>
                    </div>
                    <div className="col-md-6 form-group">
                        <input type="email" name="reply_to" placeholder="Email Address" className="form-control" required/>
                    </div>
                    <div className="col-md-6 form-group">
                        <input type="tel" name="phone" placeholder="Phone Number" className="form-control" required/>
                    </div>
                    <div className="col-md-12 form-group">
                        <textarea type="text" cols='15' rows="5" name="message" placeholder="Your Message" className="form-control" required/>
                    </div>
                    <div className="container form-group w-100 d-flex justify-content-center">
                        <button type="submit" className="my-1  btn resume px-4 w-100 mx-auto btn">
                            <span className='content font-weight-bold text-light'>
                                SEND EMAIL
                            </span>
                            <span className="resume-design pt-1"></span> 
                        </button>
                        {/* <button  className="w-100 mx-auto btn btn-outline-warning" value=""></button> */}
                    </div>
                </div>
            </form>
            <div className="d-flex  justify-content-center px-4 pt-5 mt-3 s-link">
                <a href="https://www.facebook.com/MMHK30313" className="text-decoration-none social-link" rel="noreferrer"><FaFacebookF/></a>
                <a href="https://github.com/mmhk30313" className="text-decoration-none social-link " rel="noreferrer"><FaGithub/></a>
                <a href="https://www.webtalk.co/mmhk" className="text-decoration-none social-link " rel="noreferrer"><FaWeebly/></a>
                <a href="https://www.linkedin.com/in/mehedihasan30313" className="text-decoration-none social-link" rel="noreferrer"><FaLinkedin/></a>
            </div>
            <p className="text-center text-light footer-des mt-3"><>@COPYRIGHT {new Date().getFullYear()} MEHEDI HASAN</></p>

            {/* <a href="#home-1" className="text-decoration-none text-light" rel="noreferrer"><div className="scroll-up"></div></a> */}
            <MyVerticallyCenteredModal
                user={user}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default Contact;

function MyVerticallyCenteredModal(props) {
    // const {user} = props;
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        
      >
        <Modal.Header className="bg-light btn-close-white" closeButton>
            <Modal.Body className="text-center py-3">
            <div className="w-100 mx-auto pt-4">
                <div className="">
                    <p className="text-center text-success">Thanks for your  mail. I will response as soon as possible.</p>
                    <h4 className="text-center text-warning">Stay with me.</h4>
                </div>
            </div>
            <button className="btn btn-danger mt-5" onClick={props.onHide}>Back</button>
        </Modal.Body>
        </Modal.Header>
      </Modal>
    );
  }