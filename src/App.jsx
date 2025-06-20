import "./app.css";
import Navbar from "./components/navbar/navbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Parallex from './components/parallex/Parallex';
import Services from './components/services/Services';
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Contact from "./components/contact/Contact.jsx";
import { useRef, useState } from "react";
import { Link } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";
import { useNotification } from "./components/notification/NotificationContext.jsx";




const App = () => {

  // const { notify } = useNotification();
  // onClick={()=>{
  //         notify({ type: "success", title: "Great", message: "Projects loaded successfully!" }) ;
  //         notify({ type: "error", title: "Error", message: "Failed to load projects!" }) ;
  //         notify({ type: "info", title: "Note", message: "Failed to load projects!" }) ;
  //         notify({ type: "warning", title: "Alert", message: "Failed to load projects!" }) ;
  //         }
 
  // to give the auto messeging on contact section by any button click
  const contactRef = useRef();
  const [prefillMessage, setPrefillMessage] = useState("");

  const scrollToContact = (message) => {
    setPrefillMessage(message);
    setTimeout(() => {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100); // slight delay to ensure message gets updated before scroll
  };




  return (
    <div className="most-outer">
      <section id="home-page">
        <Navbar />
        <Sidebar />
        <Hero />
      </section>

      <section id="services-page" className="para-parent">
        <Parallex type={"services"}/>
      </section>

      <section >
        <Services  scrollToContact={scrollToContact} />
      </section>

      <section id="portfolio-page" className="para-parent">
        <Parallex type={"portfolio"}/>
      </section>


      {/* this is the portfolio projects which is created using array, and sections are inside it  */}
      <Portfolio/>    
      
      <section id="about-page">
          < Contact   scrollRef={contactRef} prefillMessage={prefillMessage} />
      </section>



      {/* the bottom arrow for top action scroll */}
      {/* <Link to="home-page" smooth={true} duration={500} className="main-scroll-top">
                <FaArrowUp />
      </Link> */}

    </div>
  );
};

export default App;
