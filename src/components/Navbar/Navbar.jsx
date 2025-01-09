import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Almaaz Ahmed Khan
        </motion.span>
        <div className="social">
          <a href="#">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/almaazkhan/" target="blank">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
