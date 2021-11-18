import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ytimg.com/vi/5G6Yw52E23U/maxresdefault.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <p>Complete Comprehensive and
                            Compossionate Cardiac Care</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.futurity.org/wp/wp-content/uploads/2016/11/surgery_1600.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>

                        <p>Complete Comprehensive and
                            Compossionate Cardiac Care</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://www.familytimes.biz/uploads/images/FEB12/lanny.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>

                        <p>Complete Comprehensive and
                            Compossionate Cardiac Care</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;