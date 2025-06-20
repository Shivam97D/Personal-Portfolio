/* eslint-disable react/no-unescaped-entities */

import { useNotification } from "../notification/NotificationContext";
import "./navbar.css";
import { motion } from "framer-motion";

const Navbar = () => {

  const { notify } = useNotification()  ;

  return (
    <div className="navbar">
      <div className="logo">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.6 }}
          transition={{ duration: 0.9 }}
        >
          {/* Shivam's */}
        </motion.span>
      </div>

      <div className="social-links">
        <a href="https://github.com/Shivam97D" target="_blank" rel="noopener noreferrer">
          <img src="/github.png" alt="" className="github" />
        </a>
        <a href="https://www.linkedin.com/in/shivam-dahifale-018040238/" target="_blank" rel="noopener noreferrer">
          <img src="/linked-in.png" alt="" />
        </a>
        <a href="#" onClick={()=>notify({
                type: "error",
                title: "Social Media",
                message: "Currently Unavailable.",
            }) }
            >
          <img src="/instagram.png" alt="" />
        </a>
        <a href="https://drive.google.com/drive/folders/17UXLpyw21VGlUpa3EIJhesSLkb4k18EK?usp=sharing" target="_blank" rel="noopener noreferrer">
          <img src="/folder1.png" alt="" />
        </a>
      </div>
    </div>
  );
};


export default Navbar;
