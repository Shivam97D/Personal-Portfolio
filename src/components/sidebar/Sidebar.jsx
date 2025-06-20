import { useEffect, useRef, useState } from "react";
import "./sidebar.css";
import { delay, motion, stagger, transform } from "framer-motion"
import { circle, clipPath } from "framer-motion/client";

function Sidebar() {
  const [isSidebar, setSidebar] = useState(false);
  
  const sidebarRef = useRef(null); // ref to detect outside click
  const vari = {
    open : {
        clipPath : "circle( 1200px at 25px 25px )" ,
        transition : {
            delay : 0.1 ,
            type : "spring" ,
            stiffness : 100 ,
            damping : 40 
        }
    } ,
    closed : {
        clipPath : "circle( 10px at 50px 50px )" ,
        transition : {
            delay : 0.1 ,
            type : "spring" ,
            stiffness : 150 ,
            damping : 40 
        },
    }
  }

  const link_var = {
    open : {
        y : 0 ,
        opacity : 1 ,
        delay:0.5 ,
    } ,
    closed :{
        y : 50 ,
        opacity : 0, 
        delay: 2 ,
    }
  }

   // 👇 Detect outside click to close sidebar
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isSidebar &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !event.target.classList.contains("side-button") 
      ) {
        setSidebar(false);
        // console.log(event.target);
        
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebar]);


  return (
    <motion.div className="side-container" animate={ isSidebar ? "open" : "closed"  }   >

      {isSidebar ? (
        <motion.button
          className="side-button"
          onClick={() => setSidebar(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ×
        </motion.button>
      ) : (
        <motion.button
          className="side-button"
          onClick={(e) => {
            e.stopPropagation();
            setSidebar(true);
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          ≡
        </motion.button>
      )}
                                    
      <motion.div
            className="side-links"
            variants={vari}
            animate={isSidebar ? "open" : "closed"} // ✅ ADD THIS LINE
            ref={sidebarRef}
          > 
        <motion.a href="#home-page"  variants={ link_var }  whileHover={{scale:1.2}}  whileTap={ {scale:0.9 }  }  onClick={() => setSidebar(false)}   >Homepage</motion.a>
        <motion.a href="#services-page"  variants={ link_var }  whileHover={{scale:1.2}} whileTap={ {scale:0.9 }  }  onClick={() => setSidebar(false)}    >Services</motion.a>
        <motion.a href="#portfolio-page"  variants={ link_var } whileHover={{scale:1.2}}  whileTap={ {scale:0.9 }  }  onClick={() => setSidebar(false)}    >Portfolio</motion.a>
        <motion.a href="#contact-page"  variants={ link_var }  whileHover={{scale:1.2}}  whileTap={ {scale:0.9 }  }  onClick={() => setSidebar(false)}   >Contact</motion.a>
        <motion.a href="#about-page"  variants={ link_var }  whileHover={{scale:1.2}}  whileTap={ {scale:0.9 }  }  onClick={() => setSidebar(false)}   >About</motion.a>
      </motion.div>
    </motion.div>
  );
}

export default Sidebar;
