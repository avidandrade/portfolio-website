import Project1 from './assets/codingpic1.png'
import Project2 from './assets/javaproject1.png'
import Project3 from './assets/purplecode.webp'
import { motion } from 'framer-motion';

function Project() {  
    return (
        <motion.div
            whileInView = {{opacity: 1, x: 0}}
            initial = {{opacity: 0, x: -100}}
            transition = {{duration: 1}}
  
            id="Projects" >
            <motion.div
        
                className="projects-section">
                <h5>Programming Projects</h5>
                <motion.div 
                    whileInView = {{opacity: 1, x: 0}}
                    initial = {{opacity: 0, x: -100}}
                    transition = {{duration: 1.4}}
                    className="btn-container">
                    <a href="https://github.com/avidandrade/SE2-Project" target ="_blank" >
                        <img className="img-project" src={Project2} alt="" />
                    </a>
                    <h7>Full Stack Task Manager App</h7>
                    <p>Led a team of four to develop a scalable task management app using Agile methodology, with a Node.js/Express backend, React/TypeScript frontend, and MySQL database. Designed seven reusable API routes for task and file CRUD operations, ensuring robust validation and error handling for a smooth user experience.</p>
                
                </motion.div>
                
                <motion.div
                    whileInView = {{opacity: 1, x: 0}}
                    initial = {{opacity: 0, x: -100}}
                    transition = {{duration: 1.2}}
                    className="btn-container">
                    <a href="https://github.com/avidandrade/Online-Bookstore-API" target="_blank">
                        <img className="img-project" src={Project1} alt="" />
                    </a>
                    <h7>RESTFUL API Bookstore</h7>
                    <p>Developed a Online bookstore using Spring Boot as the backend and PostgreSQL as the database. Developed Book browsing and sorting features to the API. The project has 20 endpoints.</p>
                </motion.div>

                <motion.div
                    whileInView = {{opacity: 1, x: 0}}
                    initial = {{opacity: 0, x: -100}}
                    transition = {{duration: 1.6}}
                    className="btn-container">
                    <a>
                        <img className="img-project" src={Project3} alt="" />
                    </a>
                    <h7>Resume AutoFill Extension</h7>
                    <p>Create a platform for hosting virtual events, conferences, and workshops. Include features such as live streaming, interactive Q&A sessions, networking opportunities, virtual booths, and attendee engagement tools.</p>
                    
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
export default Project