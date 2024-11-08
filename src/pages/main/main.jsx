import SignInFormComponent from "../../components/sign-in/form"
import myImage from "../../assets/logo-profile.png"
import styles from "./main.module.css"

export default function Main() {
    console.log("kmala harris")
  return (
      <div className={styles.signIn}>
          
      <div className={styles.logoWrapper}>
              <img height={200} width={200}  src={myImage} alt="My Image" />
      </div>

      <div className={styles.signInWrapper}>
        <div className={styles.signInLeft}>
          <h1>Enter The Following Credentials</h1>
          {/* <p>By signing in, you are agreeing to our Terms and Privacy Policy</p> */}
          <div className={styles.signInFormWrapper}>
            <SignInFormComponent />
          </div>
        </div>
        {/* <div className={styles.signInRight}>
          <img src={myImage} alt="My Image" 
          />
        </div> */}
      </div>
    </div>
  )
}
