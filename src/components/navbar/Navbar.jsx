import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <Sidebar />
            <div className="wrapper">
                <motion.span 
                initial={{opacity:0, scale:0.5}} 
                animate={{opacity:1, scale:1}} 
                transition={{duration:0.5}}
                >
                    Akshita Bhatia
                </motion.span>
                <motion.div className="social"
                initial={{opacity:0, scale:0.5}} 
                animate={{opacity:1, scale:1}} 
                transition={{duration:0.5}}>
                    <a href="#"><img src="/Linkedin.png" alt="Linkedin" /></a>
                    <a href="#"><img src="/github2.png" alt="Github" /></a>
                    <a href="#"><img src="/discord.png" alt="Discord" /></a>
                    <a href="#"><img src="/youtube.png" alt="Youtube" /></a>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar