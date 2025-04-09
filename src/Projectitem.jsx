import Project1 from './assets/codingpic1.png'
import Project2 from './assets/javaproject1.png'
import Project3 from './assets/purplecode.webp'
import { motion } from 'framer-motion';

function Project() { 
    
    const navigateToRepo = (url) => {
        window.open(url, "_blank");
    };

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
                    transition = {{duration: 1.6}}
                    className="btn-container">
                    <a>
                        <img className="img-project" src={Project3} alt="" />
                    </a>
                    <h7>BookWise!</h7>
                    <p>  
                    A web application that provides personalized book recommendations based on user input. It integrates AI-powered suggestions via the Ollama model and fetches detailed book information from Google Books. Users can search for books, save favorites, retrieve saved books, and delete them. The app features a responsive design, interactive UI, and seamless API integration, making it a great tool for book enthusiasts.</p>
                    <button class="button-85" role="button"onClick={() =>navigateToRepo("https://github.com/avidandrade/book-recommendation")}>GitHub Repo</button>
                    
                </motion.div>
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
                    <button class="button-85" role="button" onClick={() => navigateToRepo("https://github.com/avidandrade/SE2-Project")} target="_blank">GitHub Repo</button>
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
                    <button class="button-85" role="button" onClick={() =>navigateToRepo("https://github.com/avidandrade/Online-Bookstore-API")}>GitHub Repo</button>
                </motion.div>

            </motion.div>
        </motion.div>
    );
}
export default Project