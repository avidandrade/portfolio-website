import { motion } from "framer-motion";

function AboutMe() {
    return (
        <motion.div 
            whileInView = {{opacity: 1, x: 0}}
            initial = {{opacity: 0, x: 100}}
            transition = {{duration: 1.7}}
            id = "about" className="about_container">
                <h3>About Me</h3>
            <div className="about_text">
                
                <p> 
                Hi, I’m a Computer Science student with hands-on experience in IT support and a strong foundation in software development. At Florida International University, I manage IT audits, support over 50 employees, and lead initiatives like redesigning departmental websites to improve functionality and efficiency. This experience has sharpened my problem-solving skills and commitment to impactful, scalable solutions.

                My recent projects include leading the development of a task management app and building an online bookstore backend, both using Agile methodology. These experiences have deepened my technical expertise and collaboration skills. I’m passionate about creating tools that enhance productivity and simplify complex workflows, and I’m excited to bring that energy to new opportunities.
                </p>
            </div>
        </motion.div>
    );
}
export default AboutMe