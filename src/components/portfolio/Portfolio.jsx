import "./portfolio.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Wow = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className="project-container">
        <div className="project-img-container" ref={ref}>
          {/* Remote image rendering */}
          <img
            src="/notfound.jpg"
            // loading="lazy"
          />
          <img
            src={item.img}
            // loading="lazy"
          />
        </div>

        <motion.div className="project-info-container" style={{ y }}>
          <h2 className="project-title">{item.title}</h2>
          <div className="project-desc">{item.description}</div>
          <div className="pro-links">
            {item.url && (
              <div className="project-button">
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  <button className="project-butt  live-btn">See Demo</button>
                </a>
              </div>
            )}
            {item.repo && (
              <div className="project-button">
                <a href={item.repo} target="_blank" rel="noopener noreferrer">
                  <button className="project-butt github-btn">
                    GitHub Repo
                  </button>
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // 🔹 New state for loader

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // to fectch the projects and if not available then use fallback data
  useEffect(() => {
    // fetch("http://localhost:3000/projects")
    fetch("https://portfolio-backend-ie49.onrender.com/projects")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) =>{
        setProjects(data);
        setLoading(false); // 🟢 Data fetched
      } )
      .catch((err) => {
        console.error("Error fetching projects:", err);

        // Use fallback data if fetch fails
        setProjects([
          {
            id: 1,
            title: "Spotify Clone",
            description:
              "The modern UI clone for Spotify, made using various modern technologies like React and Node.js.",
            img: "/spotify.png",
          },
          {
            id: 2,
            title: "Modern Portfolio",
            description:
              "A modern portfolio webpage showcasing React and Framer Motion animation features.",
            img: "/portfolio.png",
          },
          {
            id: 3,
            title: "Netflix UI Clone",
            description:
              "The modern UI clone for Netflix, built with React and Node.js for seamless design and responsiveness.",
            img: "/netflix.png",
          },
          {
            id: 4,
            title: "To Do List",
            description:
              "A minimal UI To-Do List with full functionality built with React and Node.js.",
            img: "/to do list.png",
          },
          {
            id: 5,
            title: "Hacker's Terminal",
            description:
              "An advanced hacker-style terminal in the browser showcasing async behavior and string manipulation in JavaScript.",
            img: "/hackers terminal.png",
          },
        ]);
        setLoading(false); // 🟢 Even if fallback used
      });
  }, []);

  return (
    <div className="portfolio" ref={ref} id="projects-page">
      <div className="protfolio-progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX }}
          className="portfolio-progress-bar"
        ></motion.div>
      </div>

      {loading ? (
        <section className="loader-container">
          <div className="loaderr"></div> 
        </section>
      ) : (
        projects.map((pro) => <Wow item={pro} key={pro.id} />)
      )}


    </div>
  );
};

export default Portfolio;
