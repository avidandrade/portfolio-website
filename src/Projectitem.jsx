import Project1 from './assets/codingpic1.png'
import Project2 from './assets/javaproject1.png'
import Project3 from './assets/purplecode.webp'
import { motion, stagger, useScroll } from 'framer-motion';

function Project() {
   
    return (
        <motion.div
            whileInView = {{opacity: 1, x: 0}}
            initial = {{opacity: 0, x: -100}}
            transition = {{duration: 1}}
  
            id="Projects" >
            <h5>Programming Projects</h5>
            <motion.div
        
                className="projects-section">


                <motion.div
                    whileInView = {{opacity: 1, x: 0}}
                    initial = {{opacity: 0, x: -100}}
                    transition = {{duration: 1.2}}
                    className="btn-container">
                    <img className="img-project" src={Project1} alt="" />
                    <h7>Personal Finance Manager</h7>
                    <p>Develop an application to help users manage their finances effectively. Include features such as budget tracking, expense categorization, goal setting, and visualization of financial data.</p>
                </motion.div>

                <motion.div 
                    whileInView = {{opacity: 1, x: 0}}
                    initial = {{opacity: 0, x: -100}}
                    transition = {{duration: 1.4}}
                    className="btn-container">
                    <img className="img-project" src={Project2} alt="" />
                    <h7>Language Learning App</h7>
                    <p>Develop a comprehensive tool for tracking and improving health and wellness. Include modules for fitness tracking, meal planning, sleep monitoring, mood tracking, and integration with wearable devices.</p>
                
                </motion.div>

                <motion.div
                    whileInView = {{opacity: 1, x: 0}}
                    initial = {{opacity: 0, x: -100}}
                    transition = {{duration: 1.6}}
                    className="btn-container">
                    <img className="img-project" src={Project3} alt="" />
                    <h7>Virtual Event Platform</h7>
                    <p>Create a platform for hosting virtual events, conferences, and workshops. Include features such as live streaming, interactive Q&A sessions, networking opportunities, virtual booths, and attendee engagement tools.</p>
                    
                </motion.div>
            </motion.div>
        </motion.div>
    );


}
export default Project