import { useRef } from "react";
import "./services.css";
import { animate, delay, motion, stagger, useInView } from "framer-motion";

const variantsAll = {
  initial: {
    opacity: 0,
    y: 50,
  },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};

function Services({ scrollToContact }) {


  const ref = useRef();

  const isInView = useInView(ref, { threshold: 0.5, triggerOnce: false });



  return (
    <motion.div
      className="services"
      variants={variantsAll}
      initial="initial"
      ref={ref}
      animate={isInView ? "final" : "initial"}
    // whileInView="final"
    >
      <motion.div className="services-info" variants={variantsAll}>
        <p className="services-role">
          I focous on Developing <br /> Real life Projects.
        </p>
        <hr />
      </motion.div>

      <motion.div className="servises-main" variants={variantsAll}>
        <div className="services-up">
          <div className="services-img-container">
            <img src="/people.webp" alt="" />
          </div>
          <span>
            <motion.span className="services-span" whileHover={{ color: 'orange' }}>Deploy</motion.span>
            <span>Your</span>
          </span>
        </div>
        <div className="services-down">
          <motion.span className="services-span" whileHover={{ color: "orange" }} >Projects...!</motion.span>
          <motion.button className="services-button"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
          onClick={() => scrollToContact("Hi, I want to contact You regarding a Project. Details are , ")} > Get the work done... </motion.button>
        </div>
      </motion.div>

      {/* the hard coded services we provide  */}
      {/* <motion.div className="services-bottom" variants={variantsAll}>
                        <motion.div
                          className="card"
                          whileHover={{ backgroundColor: "lightgrey", color: "black" }}
                        >
                          <div className="card-head">Heading</div>
                          <div className="card-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quod
                            porro? Id est dolorem laudantium ab alias maxime unde, nisi
                            corporis. Rem natus tenetur facilis, reprehenderit quam nesciunt.
                            Molestiae, quidem officia numquam laborum minima praesentium aperiam
                            sint.
                          </div>
                          <button className="card-button">GO</button>
                        </motion.div>
                        <motion.div
                          className="card"
                          whileHover={{ backgroundColor: "lightgrey", color: "black" }}
                        >
                          <div className="card-head">Heading</div>
                          <div className="card-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quod
                            porro? Id est dolorem laudantium ab alias maxime unde, nisi
                            corporis. Rem natus tenetur facilis, reprehenderit quam nesciunt.
                            Molestiae, quidem officia numquam laborum minima praesentium aperiam
                            sint.
                          </div>
                          <button className="card-button">GO</button>
                        </motion.div>
                        <motion.div
                          className="card"
                          whileHover={{ backgroundColor: "lightgrey", color: "black" }}
                        >
                          <div className="card-head">Heading</div>
                          <div className="card-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quod
                            porro? Id est dolorem laudantium ab alias maxime unde, nisi
                            corporis. Rem natus tenetur facilis, reprehenderit quam nesciunt.
                            Molestiae, quidem officia numquam laborum minima praesentium aperiam
                            sint.
                          </div>
                          <button className="card-button">GO</button>
                        </motion.div>
                        <motion.div
                          className="card"
                          whileHover={{ backgroundColor: "lightgrey", color: "black" }}
                        >
                          <div className="card-head">Heading</div>
                          <div className="card-desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quod
                            porro? Id est dolorem laudantium ab alias maxime unde, nisi
                            corporis. Rem natus tenetur facilis, reprehenderit quam nesciunt.
                            Molestiae, quidem officia numquam laborum minima praesentium aperiam
                            sint.
                          </div>
                          <motion.button className="card-button">GO</motion.button>
                        </motion.div>
                      </motion.div> */}


      {/* the services we provide */}

      <motion.div className="services-bottom" variants={variantsAll}>
        <motion.div
          className="card"
          variants={variantsAll}
          whileHover={{ backgroundColor: "lightgrey", color: "black" }}
        >
          <div className="card-head">End-to-End Web Apps</div>
          <div className="card-desc">
            From frontend finesse to backend brains, I craft complete applications using React, Express, Node, and MongoDB.
          </div>
          <button className="card-button" onClick={() => scrollToContact("Hi, I want a full-stack web app built. Can you help?")}> LET’S BUILD</button>
        </motion.div>

        <motion.div
          className="card"
          variants={variantsAll}
          whileHover={{ backgroundColor: "lightgrey", color: "black" }}
        >
          <div className="card-head">Custom UI/UX Design</div>
          <div className="card-desc">
            I don’t just build interfaces, I design experiences — smooth, modern, and engaging with animations and responsiveness.
          </div>
          <button className="card-button" onClick={() => scrollToContact("Hi, I want a custom UI/UX design. Can you help?")}>DESIGN TO IMPRESS</button>
        </motion.div>

        <motion.div
          className="card"
          variants={variantsAll}
          whileHover={{ backgroundColor: "lightgrey", color: "black" }}
        >
          <div className="card-head">Smart APIs & Automation</div>
          <div className="card-desc">
            I create clean, secure APIs and automate workflows — saving time, reducing manual errors, and powering integrations.
          </div>
          <button className="card-button" onClick={() => scrollToContact("Hi, I want a Smart API & Automation service. Can you help?")}>GET A API SERVICE</button>
        </motion.div>

        <motion.div
          className="card"
          variants={variantsAll}
          whileHover={{ backgroundColor: "lightgrey", color: "black" }}
        >
          <div className="card-head">Deployment & Optimization</div>
          <div className="card-desc">
            Deploying apps via Vercel, Netlify or custom servers; optimizing performance and SEO.
          </div>
          <button className="card-button" onClick={() => scrollToContact("Hi, I want a Deployment and Optimization service. Can you help?")}>DEPLOY NOW</button>
        </motion.div>


        <motion.div
          className="card"
          variants={variantsAll}
          whileHover={{ backgroundColor: "lightgrey", color: "black" }}
        >
          <div className="card-head"> Custom Admin Panels</div>
          <div className="card-desc">
            I build dashboards that make managing your app/data a breeze — tailored to your business or client needs.
          </div>
          <button className="card-button" onClick={() => scrollToContact("Hi, I want a My custom Admin panel built. Can you help?")}>BUILD MY PANEL</button>
        </motion.div>
      </motion.div>



    </motion.div>
  );
}

export default Services;
