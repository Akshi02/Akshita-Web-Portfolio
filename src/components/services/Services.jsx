import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Certificates</motion.b>
          </h1>
        </div>
        <div className="title">
          <h1>
            & lot of <motion.b whileHover={{color:"orange"}}>Skills</motion.b>
          </h1>
          <button><a href="https://www.linkedin.com/in/akshi-bhatia-1a6a9922a/details/certifications/" target="_blank" rel="noopener noreferrer">Let's connect!</a></button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>IBM Data Fundamentals</h2>
          <br />
          <p>
          This course was beneficial in helping me grasp the idea of 
          using IBM Watson Studio to clean, improve, and visualize data. 
          I learned data wrangling, analysis, and Tableau software visualization skills.
          </p>
          <br />
          <button><a href="https://www.credly.com/badges/2c4156f7-3288-4d5d-9856-4a8969f92863/linked_in_profile" target="_blank" rel="noopener noreferrer">Go</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>IBM Data Science Practioner</h2>
          <br />
          <p>
          This course helped me understand technical topics, design thinking, 
          and open source tool application. 
          I gained the skills to apply Data Science concepts and technologies 
          to real-world scenarios, making me well-prepared for educational purposes.
          </p>
          <br />
          <button><a href="https://www.credly.com/badges/2ceb88fb-f39a-457c-87b2-b5e67786c544/linked_in_profile" target="_blank" rel="noopener noreferrer">Go</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Team Essentials for AI</h2>
          <br />
          <p>
            I skillfully applied Enterprise Design Thinking principles and 
            activities to design responsible AI systems with a deliberate 
            focus on human-centric solutions. This experience allowed me to 
            ensure the AI systems were innovative and considerate of people.
          </p>
          <br />
          <button><a href="https://www.credly.com/badges/593823f0-e0c0-4d3c-ad53-b69343df7976/linked_in_profile" target="_blank" rel="noopener noreferrer">Go</a></button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Enterprise Design Thinking</h2>
          <br />
          <p>
            I acquired a deep understanding of applying Enterprise Design Thinking 
            and its value. As a Practitioner, I integrate these principles into my 
            daily work, leveraging them to enhance my projects and outcomes through 
            human-centric design, creative problem-solving, and strategic thinking.
          </p>
          <br />
          <button ><a href="https://www.credly.com/badges/487ad5eb-7824-4bb5-aaa1-ad6b18d1cab0/linked_in_profile" target="_blank" rel="noopener noreferrer">Go</a></button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;