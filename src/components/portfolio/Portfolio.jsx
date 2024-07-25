import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "First E-Portfolio",
    img: "\First_Eprofile.png",
    desc: "I created my first website using HTML, JavaScript, CSS, AJAX, XSLT, and XML. Now, I'm developing a more professional site. Both reflect my personality. I'd love your feedback!",
    link: "https://akshi02.github.io/",
  },
  {
    id: 2,
    title: "Deepfake Detection",
    img: "\Deepfake.png",
    desc: "My team and I combined a model with an open-source app to stop deepfake audio scams for my senior year project. In my ML work, I experimented with various models and worked with XGBOOST. Look it over!",
    link: "https://github.com/Akshi02/321-Grad-Project-Submission-1",
  },
  {
    id: 3,
    title: "Gearsbot RL",
    img: "\Gearsbot.png",
    desc: "This project combines robotics and reinforcement learning! In an effort to mimic a maze runner robot, my team and I have been using Python and Gearsbot to try and get to one of the colored checkpoints.",
    link: "https://github.com/Akshi02/CSCI218_WEBOTS_PROJECT",
  },
  {
    id: 4,
    title: "POS Supermart App",
    img: "\POS.png",
    desc: "I developed a Point-of-sale Express application for Supermart using object-oriented C++ programming for my project. It displays the items that have been purchased, computes the total cost, and takes payments in Dhs, $, or €. The only currency returned is Dhs.",
    link: "https://github.com/Akshi02/POS-Express-Supermart-App",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.link} target="_blank" rel="noopener noreferrer">See Demo</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;