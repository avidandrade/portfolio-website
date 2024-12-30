
import Project3 from './assets/profilepic.png'
import { motion, transform } from 'framer-motion';

const container = (time) => ({
    hidden: {x:-100, opacity: 0},
    visible: {
        x:0, 
        opacity: 1, 
        transition:{duration: 0.5, delay:time}
    }
});

function HeroSection(){
    return(
        <div className="wrapper">
            <motion.img 
            initial ={{x:100, opacity: 0}}
            animate = {{x:0, opacity: 1}}
            transition={{duration: 1, delay: 0.9}}
            className="image"
            src={Project3} alt=""/> 
            <div className="textbox">

                <motion.h2 variants={container(0.5)}
                initial="hidden"
                animate = "visible"
                >Welcome! I'm <br/> Avid Andrade Trejo </motion.h2>
                <motion.p variants={container(0.6)}
                initial="hidden"
                animate = "visible">I'm a FIU Student, Studying Computer Science! I'm a Junior and looking for internships. </motion.p>
            </div>
         </div>
    );
}

export default HeroSection