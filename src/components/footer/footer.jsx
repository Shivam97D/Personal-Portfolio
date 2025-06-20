import "./footer.css";
import { FaArrowUp, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-top">
        <p className="footer-quote">
          “ Code is not just lines, it&apos;s a conversation with the future. ”
        </p>


        <div className="footer-links">
          <a href="#services-page">About</a>
          <a href="#projects-page">Projects</a>
          <a href="#contact-page">Contact</a>
          <a href="https://drive.google.com/drive/folders/17UXLpyw21VGlUpa3EIJhesSLkb4k18EK?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>

        <div className="footer-socials">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>

        <Link to="home-page" smooth={true} duration={500} className="scroll-top-btn">
          <FaArrowUp />
        </Link>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Shivam Dahifale. All rights reserved.</p>
      </div>
      
      <div className="foot-back">
        <img src="/lightmountain.png" alt="" />
      </div>

    </footer>
  );
};

export default Footer;
