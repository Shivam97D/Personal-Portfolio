import { linearGradient } from "framer-motion/client";
import "./parallex.css";
import { useRef } from "react";
import { motion , useScroll, useTransform } from "framer-motion";

function Parallex({ type }) {
  const secRef = useRef();
  const {scrollYProgress } = useScroll({
    target: secRef,
    offset : ["start start" , "end start"]
  });

  const yBg = useTransform( scrollYProgress , [ 0 , 1 ] , [ '0%' , '500%' ]);
  const yStar = useTransform( scrollYProgress , [ 0 , 1 ] , [ '0%' , '70%' ]);
  const yPlanet = useTransform( scrollYProgress , [ 0 , 1 ] , [ '0%' , '80%' ]);
  
const heroVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollImg :{
    opacity : 1 ,
    y : 30 ,
    transition : {
      duration : 3 ,
      repeat : Infinity ,
    }
  }
};

  return (
    <div
      className="parallex"
      ref={ secRef }
      style={{
        position: 'relative',
        background:
          type === "services"
            ? "linear-gradient( 180deg , #111132 , #0c0c1d)"
            : "linear-gradient( 180deg , #111132 , #505064)",
      }}
    >
      <motion.h1 style={{ y : yBg } } className="para-heading">
        {type === "services" ? ( <> 
        SOLUTIONS BUILDED <br/> FOR YOU
        </> ) : "ENGINEERED TO DELIVER"}
        
        {/* ENGINEERED TO DELIVER      DESIGN. DEVELOP. DELIVER.         <- more ideas */}
      </motion.h1>
      <h1></h1>
      <motion.div  className="mountain">
        <img src="/mountains.png" alt="" />
      </motion.div>

      <motion.div 
        style={{ y : yPlanet}} 
        className="planet"
        
  >
        <motion.img src={ ( type === "services" ) ? "/planets.png" : "/sun.png" }
        
        animate={{
          y: [50, -80, 50, -60, 40], // Float up and down
          x: [50, 0, -50, -50, 50], // Float up and down
          rotate: [0 , -90 , 0], // Rotate around
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        
        alt="" />
      </motion.div>

      <motion.div className="stars" style={{ x : yStar }} 
      >
        <motion.img
        
        animate={{
          y: [0 ,-50, 10, 80, 0], // Float up and down
          x: [ -50, 50, -100, 50, -50], // Float up and down
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        
        src="/stars.png" alt="" />
      </motion.div>
      <motion.img src="/scroll.png" className="para-head-img" variants={ heroVariants } animate="scrollImg" alt="" />
    </div>
  );
}

export default Parallex;
