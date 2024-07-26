
import './Portfolio.css';
// in terminal 'npm i swiper'...and
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import one from '../../images/one.png';
import two from '../../images/two.png';
import three from '../../images/three.png';
import four from '../../images/four.png';

function Portfolio(){
    return(
        <div className="portfolio" id="Portfolio">
            {/*heading */}
            <span>Recent Projecrts</span>
            <span>Portfolio</span>
            {/*slider */}
            <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className='portfolio-slider'>
                <SwiperSlide>
                    <img src={one} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={two} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={three} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={four} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
export default Portfolio;