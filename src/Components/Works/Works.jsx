import React from 'react';
import './Works.css';
import Amazon from '../../images/amazon.png';
import Fiverr from '../../images/fiverr.png';
import Shopify from '../../images/shopify.png';
import Upwork from '../../images/upwork.png';
import Facebook from '../../images/facebookk.png';
import {motion} from 'framer-motion';

const Works = () => {
    return(
        <div className="works">
            <div className="awesome">
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <span>
                    Hello guys my name is Ahmed raza and i am a web developer
                    <br />
                    let's get work together.
                    <br />
                    let's get work together and i am a web developer
                    <br />
                    let's work together.
                </span>
                <button className="button s-button">Hire me</button>
                <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
            </div>
            {/*right side */}
            <div className="w-right">
                {/*<div className="w-mainCircle">*/}
                <motion.div
                initial={{rotate: 45}}
                whileInView={{rotate: 0}}
                viewport={{margin: '-40px'}}
                transition={{duration: 3.5, type: 'spring'}}
                className="w-mainCircle"
                >
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </motion.div>
                {/* background circles */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}
export default Works;