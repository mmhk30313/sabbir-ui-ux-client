import React, { useContext, useEffect, useState } from 'react';
import './Login.css';
import "firebase/auth";
import google from '../../images/icon/google.png';
import firebase from "firebase/app";
// import * as firebase from "firebase/app";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import firebaseConfig from './firebase.config';
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || { from: { pathname: "/"}};
    const [wrongMessage, setWrongMessage] = useState(false);
    const [allAdmin, setAllAdmin] = useState([]);
    const path = location.state.from.pathname;

    // console.log(path);
    useEffect(() => {
        fetch(`https://my-all-works-server.herokuapp.com/admins`)
        .then(res => res.json())
        .then(data => {
        //    console.log(data);
           setAllAdmin(data);
        })
        
    },[location.state])
    const handleSubmit = (evt) =>{
        evt.preventDefault();
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then( result => {
            // The signed-in user info.
            const curUser = result.user;
            // console.log(user);
            const {displayName, email, photoURL} = curUser;
            const user= {
                email,
                displayName,
                photoURL
            }
            // setLoggedInUser(user);

            const isAdminEmail = allAdmin.find( admin => admin.email === user.email);
            // console.log(isAdminEmail);
            if(path === '/admin'){
                if(isAdminEmail){
                    setLoggedInUser(user);
                    setWrongMessage(false);
                    history.replace(from);
                }
                else{
                    setLoggedInUser({});
                    setWrongMessage("Sorry!!! you are not an admin")
                }
            }
            else{
                setLoggedInUser(user);
                history.replace(from);
            }
        })
        .catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            console.log(errorMessage, loggedInUser);
        });
    }
    return (
        <div className="bg-light login">
            <h5 className="text-center text-dark mt-5">Login as an admin</h5>
            <div className="login-field text-center">
                <form onSubmit={handleSubmit} data-aos="flip-up" data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className="jumbotron w-100 mx-auto rounded shadow bg-light">
                    <button type="submit" className="btn btn-outline-warning mx-auto" style={{borderRadius: '30px'}} ><img src={google} alt="" style={{height: '25px'}} /> Continue With Google</button>    
                </form>
                {
                    wrongMessage && <p className="text-danger"><small>{wrongMessage}</small></p>
                }
            </div>
        </div>
    );
};

export default Login;