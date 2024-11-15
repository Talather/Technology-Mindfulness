import { initializeApp } from "firebase/app"
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  writeBatch,
  query,
  where,
} from "firebase/firestore"

const apiKey = import.meta.env.VITE_API_KEY
const authDomain = import.meta.env.VITE_AUTH_DOMAIN
const projectId = import.meta.env.VITE_PROJECTID
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET

const messagingSenderId = import.meta.env.VITE_MESSAGE_SENDER_ID
const appId = import.meta.env.VITE_APP_ID
const dbUrl = import.meta.env.VITE_DATABASE_URL

// Replace these placeholders with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  databaseURL: dbUrl,
}

// Initialize Firebase App
initializeApp(firebaseConfig)

// Get a reference to the Firestore database

// Function to fetch and log users (optional)

async function getUser() {
  try {
    const db = getFirestore()

    const usersCollectionRef = collection(db, "users")

    const querySnapshot = await getDocs(usersCollectionRef)

    const users = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    console.log("users:", users)
  } catch (error) {
    console.error("Error fetching users:", error)
  }
}

async function createUser(userCreate) {
  try {
    const db = getFirestore()
    const usersCollectionRef = collection(db, "users")
    const querySnapshot = await addDoc(usersCollectionRef, userCreate)

    return {
      id: querySnapshot.id,
      path: querySnapshot.path,
    }
  } catch (error) {
    console.error("Error fetching users:", error)
  }
}

async function getVideo(grade) {
  try {
    const db = getFirestore()
    // Create a reference to the "users" collection
    const videoCollectionRef = collection(db, "video")

    // Fetch all documents from the "users" collection

    const querySnapshot = await query(
      videoCollectionRef,
      where("grade", "==", grade)
    )

    // // Extract user data with IDs and format it
    if (querySnapshot) {
      const v = await getDocs(querySnapshot)
      const videos = v.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      return videos
    } else {
      return null
    }
  } catch (error) {
    console.error("Error fetching users:", error)
  }
}

async function getQuiz() {
  try {
    const db = getFirestore()
    // Create a reference to the "users" collection
    const quizCollectionRef = collection(db, "quiz")
    const questionCollectionRef = collection(db, "question")
    const answerCollectionRef = collection(db, "answer")

    // Fetch all documents from the "users" collection
    const quizSnapshot = await getDocs(quizCollectionRef)
    const questionSnapshot = await getDocs(questionCollectionRef)
    const answerSnapshot = await getDocs(answerCollectionRef)

    // // Extract user data with IDs and format it
    const quizes = quizSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    const questions = questionSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    const answers = answerSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))

    console.log("users:", quizes) // Log retrieved user data
    console.log("question:", questions)
    console.log("answer:", answers)
  } catch (error) {
    console.error("Error fetching users:", error)
  }
}

async function createSubmittedQuiz(submittedQuizCreate) {
  try {
    const db = getFirestore()
    // Create a reference to the "users" collection
    const usersCollectionRef = collection(db, "submittedQuiz")

    // Fetch all documents from the "users" collection
    const submittedQuiz = await addDoc(usersCollectionRef, submittedQuizCreate)

    // // Extract user data with IDs and format it
    // const submi = querySnapshot.docs.map((doc) => ({
    //   id: doc.id,
    //   ...doc.data(),
    // }))

    // consol e.log("users:", users)// Log retrieved user data
    return submittedQuiz
  } catch (error) {
    console.error("Error fetching users:", error)
  }
}

async function createResponses(responseCreates) {
  try {
    const db = getFirestore()
    // Create a reference to the "users" collection
    const batch = writeBatch(db)

    responseCreates.forEach((item) => {
      const docRef = doc(db, "responses", item.id) // Specify the collection and document ID
      batch.set(docRef, item) // Set the document data
    })

    // Fetch all documents from the "users" collection
    const responses = await batch.commit()

    console.log("users:", responses) // Log retrieved user data
  } catch (error) {
    console.error("Error fetching users:", error)
  }
}

export {
  getUser,
  createResponses,
  createSubmittedQuiz,
  createUser,
  getQuiz,
  getVideo,
}
