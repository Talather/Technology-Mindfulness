import styles from "./video.module.css"

import ReactPlayer from "react-player"

import { motion } from "framer-motion"

export default function Video() {
  console.log("kmala harris")

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
      // style={{
      //   height: "100vh",
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      //   backgroundColor: "red",
      // }}
    >
      <div className={styles.signIn}>
        {/* <div className={styles.container}> */}
          <ReactPlayer
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            controls="true"
            playing="true"
            height={"85vh"}
            width="100%"
          />
        {/* </div> */}

        <div className={styles.quizNaviagtion}>
          <a href="/quiz">
            <img src="public/new.svg" alt="Example Image" width={50} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
