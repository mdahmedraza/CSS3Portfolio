import React from 'react';
import './Services.css';
import Card from '../Card/Card';
import Resume from './resume.pdf'

import HeartEmoji from '../../images/heart-emoji.png';
import {motion} from 'framer-motion';

const Services=()=>{
    const transition = {duration: 2, type: 'spring'}
    return(
        <div className="services" id="Services">
            {/*left side */}
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <span>
                    Hello guys my name is Ahmed raza and i am a web developer
                    <br />
                    let's get work together.
                </span>
                <a href={Resume} download>
                    <button className="button s-button">Download CV</button>
                </a>
                <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
            </div>
            {/*right side */}
            <div className="cards">
                {/*
                <div style={{left: '14rem'}}>
                    <Card
                    emoji={HeartEmoji}
                    heading={'Design'}
                    detail={"Figma, Sketch, Photoshop, Adobe,  Adobe xd"}
                    />
                </div>
                */}
                <motion.div
                initial={{left: '24rem'}}
                whileInView={{left: "14rem"}}
                transition={transition}
                style={{left: '14rem'}}
                >
                    <Card
                    emoji={HeartEmoji}
                    heading={'Design'}
                    detail={"Figma, Sketch, Photoshop, Adobe,  Adobe xd"}
                    />
                </motion.div>

                <div style={{top: "12rem", left: '-4rem'}}>
                    <Card
                    emoji={HeartEmoji}
                    heading={'Developer'}
                    detail={"HTML, CSS, JavaScript, React"}
                    />
                </div>
                <div style={{top: "19rem", left: '12rem'}}>
                    <Card
                    emoji={HeartEmoji}
                    heading={'UI/UX'}
                    detail={"i am a professional UI or UX designer and highly demandable."}
                    />
                </div>
                <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
            </div>
        </div>
    )
}
export default Services;