import { CircularProgress } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import WithStyles from './WithStyles';

const Testimonials = () => {
    const [clients, setClients] = useState({});
    useEffect(() => {
        fetch("https://my-all-works-server.herokuapp.com/client-reviews")
        .then(res => res.json())
        .then(data => setClients(data))
        .catch(err => console.log(err))
    },[])
    // console.log(clientReviews);
    return (
        <div style={{height: ''}} className="container main-div">
            <h3 className='font-weight-bold header'>TESTIMONIALS</h3>
            <Carousel
                // End point
                additionalTransfrom={0}
                arrows={false}
                autoPlay
                autoPlaySpeed={5000}
                centerMode={false}
                className=""
                containerClass="container"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                    desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 1
                    },
                    mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1
                    },
                    tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 1
                    }
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
               {
                   clients.length > 0 
                   && clients.map((client) => <WithStyles key={client._id} client={client}/>)
                //    clientReviews.length > 0 
                //    && clientReviews.map((clientReview) => <WithStyles key={clientReview._id} review={clientReview}/>)
               }
               
            </Carousel>
            {
                clients.length < 1 && <div className="d-flex justify-content-center w-100 mx-auto align-items-center my-5 text-center">
                    <CircularProgress color="secondary" />
                </div>
            }
        </div>
    );
};

function CustomButtonGroupAsArrows ({ next, previous }) {
  return (
    <div className="text-center mt-4">
      {/* <h4>These buttons can be positioned anywhere you want on the screen</h4> */}
      <button className="btn btn-success btn-outlie-info rounded-circle mx-1 font-weight-bold" onClick={previous}>&#8882;</button>
      <button className="btn btn-success btn-outlie-info  rounded-circle mx-1 font-weight-bold" onClick={next}>&#8883;</button>
    </div>
  );
}

export default Testimonials;
