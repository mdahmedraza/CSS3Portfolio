import React from 'react';
import './Intro.css';
import FloatingDiv from '../../Components/FloatingDiv/FloatingDiv';
import github from '../../images/git-yellow.png';
import linkedIn from '../../images/linkedin-yellow.png';
import insta from '../../images/instagram-yellow.png';
import blue from '../../images/blue-pond.png';
import purple from '../../images/purple-pond.png';
import person from '../../images/person.png';
import crown from '../../images/crown.png';
import like from '../../images/like.png';
import emoji from '../../images/emoji.png';
import {motion} from 'framer-motion';

const Intro=()=>{
    const transition = {duration: 2, type: 'spring'}
    return(
        <div className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>Hy! I Am</span>
                    <span>Ahmed Raza</span>
                    <span>FULL STACK Develover with high level of experience in web designing
                        and development, producting the Quality work
                    </span>
                </div>
                <button className='button i-button'>Hire me</button>
                <div className='i-icons'>
                    <img src={github} alt="" />
                    <img src={linkedIn} alt="" />
                    <img src={insta} alt="" />
                </div>
            </div>
            <div className='i-right'>
                <img src={blue} alt="blue" />
                <img src={purple} alt="purple" />
                <img src={person} alt="person" />
                {/*<img src={emoji} alt="emoji" />*/}
                <motion.img
                initial={{left: "-59%"}}
                whileInView={{left: "-44%"}}
                transition={transition}
                src={emoji}
                alt=""
                />
                {/*
                <div style={{top: '9%', left: '58%'}}>
                    <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
                </div>
                */}
                <motion.div
                initial={{top: "9%", left: "68%"}}
                whileInView={{left: "58%"}}
                transition={transition}
                style={{top: '9%', left: '58%'}}
                >
                    <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
                </motion.div>
                {/*
                <div style={{top: '13rem', left: '-2rem'}}>
                    <FloatingDiv image={like} txt1='Best Design' txt2='Award'/>
                </div>
                */}
                <motion.div
                initial={{top: "13rem", left: "-4rem"}}
                whileInView={{left: "-2rem"}}
                transition={transition}
                style={{top: '13rem', left: '-2rem'}}
                >
                    <FloatingDiv image={like} txt1='Best Design' txt2='Award'/>
                </motion.div>

                <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
                <div className="blur" style={{
                    background: '#C1F5FF',
                    top: '13rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}></div>
            </div>
        </div>
    )
}
export default Intro;