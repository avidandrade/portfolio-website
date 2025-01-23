import 'boxicons/css/boxicons.min.css';
import {motion} from "framer-motion"

const iconVariants = (duration) =>({
    initial: {y:-20},
    animate:{
        y:[20,-20],
        transition:{
            duration: duration, 
            ease:"linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

function Socials() {
    return (

        <>
            <div id="Socials"  className="contact">

                <h4> Feel Free to Contact Me!</h4>
                <div className="socials">
                    <motion.a href="https://www.instagram.com/hmavid_/" variants = {iconVariants(1.2)} initial= "initial" animate = "animate" target="_blank"><i className='bx bxl-instagram'></i></motion.a>
                    <motion.a href="https://www.linkedin.com/in/avid-andrade-trejo-898a87251/" variants = {iconVariants(1.3)} initial= "initial" animate = "animate" target="_blank"> <i
                        className='bx bxl-linkedin'></i>
                    </motion.a>
                    <motion.a href="https://www.youtube.com" variants = {iconVariants(1.1)} initial= "initial" animate = "animate" > <i target ="_blank"className='bx bxl-youtube'></i> </motion.a>
                </div>
            </div>

            <div>
                <h6> Thank you for Visiting!</h6>
            </div>
        </> 
    );
}

export default Socials