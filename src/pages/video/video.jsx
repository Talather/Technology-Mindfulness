import styles from "./video.module.css";

import ReactPlayer from "react-player";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function Video() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ x: "100%" }} // Start off-screen to the right
      animate={{ x: 0 }} // Animate to the normal position
      exit={{ x: "-100%" }} // Exit to the left side of the screen
      transition={{
        type: "spring",
        stiffness: 100, // Lower stiffness for smoother easing
        damping: 25, // Increase damping to smooth out the bounce
        mass: 1, // Optional: Control the mass for a more natural feel
        duration: 0.75, // Duration for the animation in seconds
      }}
      style={
        {
          // height: "100vh",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // backgroundColor: "red",
          // borderRadius:"20px"
        }
      }
    >
      <div className={styles.signIn}>
        {/* <div className={styles.container}> */}
        <ReactPlayer
          url=" https://www.youtube.com/watch?v=ikzY4NQeR1U"
          controls="true"
          playing="true"
          height={"85vh"}
          width="100%"

          // style={{borderRadius:"10px"}}
        />
        {/* </div> */}

        <div className={styles.quizNaviagtion}>
          <div
            onClick={() => {
              navigate("/quiz");
            }}
          >
            <img
              src="https://w7.pngwing.com/pngs/394/1024/png-transparent-arrow-arrows-forward-navigation-next-pointer-right-arrow-set-icon-thumbnail.png"
              alt="Example Image"
              width={50}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
