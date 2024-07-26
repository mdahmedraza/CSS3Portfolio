import './Testimonial.css';
import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
//import {Pagination} from "swiper";
//import 'swiper/css/pagination';
import 'swiper/css';
import profilePic1 from '../../images/p1.png';
import profilePic2 from '../../images/p2.png';
import profilePic3 from '../../images/p3.png';
import profilePic4 from '../../images/p4.png';

const Testimonial=()=>{
    const clients=[
        {
            img: profilePic1,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur si"
        },
        {
            img: profilePic2,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur si"
        },
        {
            img: profilePic3,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur si"
        },
        {
            img: profilePic4,
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur si"
        },
    ]
    return(
        <div className="t-wrapper" id="Testimonials">
            <div className="t-heading">
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span>from me...</span>
                <div className="blur t-blur1" style={{background: "var(--purple"}}></div>
                <div className="blur t-blur2" style={{background: "skyblue"}}></div>
            </div>
            {/*slider */}
            <Swiper
            /*modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}
            */>
                {clients.map((client, index)=>{
                    return(
                        <SwiperSlide dey={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}
export default Testimonial;