import { animate, motion } from "framer-motion";
import "./hero.css";
import { useNotification } from "../notification/NotificationContext";

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


const sliderVarient = {
  initial : {
    x : 0 ,
  }
  , 
  animate : {
    x : '-80%' ,
    transition :{
      repeat : Infinity ,
      duration : 40 ,
      repeatType : 'mirror' ,
    },
  },
}

  

function Hero() {

  const { notify } = useNotification(); // the notification function for messege

  return (
    <div className="hero-container">
      <div className="text-wrapper">
        <motion.div
          className="hero-info"
          variants={ heroVariants }
          initial="initial"
          animate="animate"
        >
          <motion.h2 className="hero-title" variants={ heroVariants }>
            SHIVAM DAHIFALE
          </motion.h2>

          <motion.h1 className="hero-role" variants={ heroVariants }>
            Full Stack Web Developer
          </motion.h1>

          <motion.div className="hero-but" variants={ heroVariants }>
            <a href="#portfolio-page">
              <button className="but-pro" onClick={()=>{
                    notify({ type: "success", title: "Project section", message: "These are the Projects....!" }) ;
                    }
                  }
                  >Projects</button>
            </a>
            <a href="#contact-page">
              <button className="but-con"  onClick={()=>{
                    notify({ type: "success", title: "Contact section", message: "Redirected to contact section, ready to connect....!" }) ;
                    }
                  }
                   >Contact</button>
            </a>
          </motion.div>

          <motion.div className="scroll-img" variants={ heroVariants }  >
            <motion.img src="/scroll.png" variants={ heroVariants } animate="scrollImg" alt=""  onClick={()=>{
                    notify({ type: "info", title: "Scroll instruction.", message: "Scroll down !" }) ;
                    }
                  }
                   />
          </motion.div>

          <motion.div  className="hero-back-text" variants={sliderVarient} initial="initial" animate="animate" >Coder Programmer Developer</motion.div>
        </motion.div>
      </div>

      <img
        className="hero-img"
        src="/shivam4.png"
        alt="The main profile img."
        onClick={()=>{
          notify({ type: "success", title: "Great", message: "Projects loaded successfully! " }) ;
          notify({ type: "error", title: "Error", message: "Failed to load projects!" }) ;
          notify({ type: "info", title: "Note", message: "Failed to load projects!" }) ;
          notify({ type: "warning", title: "Alert", message: "Failed to load projects!" }) ;
          }
        }

      />
    </div>
  );
}

export default Hero;
