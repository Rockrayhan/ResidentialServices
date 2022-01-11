import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';


const Banner = () => {
     return (
          <section id="cover">
               <Carousel fade indicators={false}>
                    <Carousel.Item className="h-100">
                         <div className="overlay"></div>
                         <img
                              className="d-block w-100"
                              src="https://images.unsplash.com/photo-1602028915047-37269d1a73f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbiUyMGRlc2lnbnxlbnwwfHwwfHw%3D&w=1000&q=80"
                              alt="First slide"
                         />
                         
                         <Carousel.Caption>
                             <h3 className="display-2 fw-bold text-white">Chitchen Interior Services</h3>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="h-100">
                         <div className="overlay"></div>
                         <img
                              className="d-block w-100"
                              src="https://www.businessbrokerageblogs.com/wp-content/uploads/2017/11/interior-design-architecture-1200x675.jpg"
                              alt="Second slide"
                         />
                         <Carousel.Caption>
                              <h3 className="display-2 fw-bold text-white">Architecture Services</h3>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="h-100">
                         <div className="overlay"></div>
                         <img
                              className="d-block w-100"
                              src="https://www.greatlakesrecovery.org/wp-content/uploads/2019/10/web2-1100x500.jpg"
                              alt="Third slide"
                         />
                         <Carousel.Caption>
                              <h3 className="display-2 fw-bold text-white">Interior Design Services</h3>
                         </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>
          </section>
     );
};

export default Banner;
