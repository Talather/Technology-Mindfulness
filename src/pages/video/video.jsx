// import SignInFormComponent from "../../components/sign-in/form"
// import myImage from "../../assets/logo-profile.png"
import styles from "./video.module.css"
// import React from "react"
import ReactPlayer from "react-player"
// import { useLocation } from "react-router-dom"
// import { CSSTransition } from "react-transition-group"
import { motion } from "framer-motion"
// Render a YouTube video player


export default function Video() {
  console.log("kmala harris")
  return (
    // <motion.div
    //   initial={{ x: "100%" }} // Start off-screen to the right
    //   animate={{ x: 0 }} // Animate to the normal position
    //   exit={{ x: "-100%" }} // Exit to the left
    //   transition={{ type: "spring", stiffness: 300 }} // Smooth spring animation
    //   style={{
    //     height: "100vh",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     backgroundColor: "lightblue",
    //   }}
    // >
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
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <div className={styles.signIn}>
        <div className={styles.container}>
          {/* <div className={styles.signInWrapper}>
            <div className={styles.signInLeft}> */}

          {/* <h1>Enter The Following deaatils</h1> */}
          <ReactPlayer
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            controls="true"
            playing="true"
            height={"85vh"}
            // width={500}
            width="100%"
            // light="false"
          />
          {/* <p>By signing in, you are agreeing to our Terms and Privacy Policy</p> */}
        </div>
        {/* <div className={styles.signInRight}>
          <img src={myImage} alt="My Image" 
          />
        </div> */}
        {/* </div>
        </div> */}
      </div>
    </motion.div>
  )
}
