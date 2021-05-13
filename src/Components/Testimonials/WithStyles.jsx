import React from 'react';
// import star from '../../images/icon/star.png';
// import { BsFillStarFill } from "react-icons/bs";
import { FaQuoteRight } from "react-icons/fa";
const WithStyles = ({client}) => {
    
    const {name, img, description, company} = client;
    return (
        <div  className="my-5 withStyle text-center mr-4">
            <h1 className="brand-color text-center"><FaQuoteRight/></h1>
                <div className="des mt-4 text-justify mx-auto">
                    <p style={{color: 'thistle'}} className=" client-description text-light"><small>{description}</small></p>
                </div>
            <div className="my-3">
                <img style={{height: '80px',width: '80px',clipPath: "circle(53.9% at 50% 50%)"}} className="img-fluid mx-auto" src={img} alt=""/>
                <div className="text-dark mx-auto text-center mt-4">
                    <h6 className="text-light">{name}</h6>
                    <p className="text-light"><small style={{color: '#9a4dce'}}>{company}</small></p>
                </div>
                <div className="d-flex justify-content-center">
                    {
                        // [0,1,2,1,3].map((i, idx) => <div className="d-flex justify-content-center brand-color mx-1">
                        //     <BsFillStarFill/>
                        // </div>)
                        // [0,1,2,1,3].map((i, idx) => <img style={{height: '18px'}} key={idx} src={star} alt=''/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default WithStyles;