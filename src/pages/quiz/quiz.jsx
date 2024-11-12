"use client"

import { Button, Progress, Radio, RadioGroup } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import styles from "./quiz.module.css"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import "./slideComponent.css"
export default function Quiz() {
  const [completed, setCompleted] = useState(false)
  const {
    control,
    formState: { isSubmitting },
    getValues,
    handleSubmit,
  } = useForm({ mode: "onChange" })

  const [progress, setProgress] = useState(0)
  const [state, setState] = useState({})
  const questions = [
    {
      _id: 1,
      name: "Is he a good person?",
      answers: [
        { _id: "1", name: "Yes" },
        { _id: "2", name: "No" },
        { _id: "3", name: "Definitely not" },
        { _id: "4", name: "No doubt" },
      ],
      correctAnswerId: "1",
    },
    {
      _id: 2,
      name: "Will he get a girl in the future?",
      answers: [
        { _id: "1", name: "Yes" },
        { _id: "2", name: "No" },
        { _id: "3", name: "Definitely not" },
        { _id: "4", name: "No doubt" },
      ],
      correctAnswerId: "2",
    },
    {
      _id: 3,
      name: "Will he become rich?",
      answers: [
        { _id: "1", name: "Yes" },
        { _id: "2", name: "No" },
        { _id: "3", name: "Definitely not" },
        { _id: "4", name: "No doubt" },
      ],
      correctAnswerId: "1",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [correctAnswerScore, setCorrectAnswerScore] = useState(0)
  
  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(currentIndex + 1)
  }

  const handlePrevious = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1)
  }

  // const handleSkip = () => {
  //   setCurrentIndex((currentIndex + 1) % questions.length)
  // }

  function evaluateQuiz(formData) {
    let correctAnswers = 0

    const k = Object.keys(formData)
    console.log("chikna", k)

    for (const key in k) {
      // console.log("key of formdata:", key)
      // console.log("formData[k[key]]:", formData[k[key]])
      // console.log(
      //   "questions[key].correctAnswerId:",
      //   questions[key].correctAnswerId
      // )
      if (formData[k[key]] === questions[key].correctAnswerId) {
        console.log("harami", key)
        correctAnswers = correctAnswers + 1
      }
    }
    return correctAnswers
  }

  

  const onSubmit = async (formData) => {
    const correctAnswerScore = evaluateQuiz(formData)

    console.log("zalim", correctAnswerScore)
    setCorrectAnswerScore(correctAnswerScore)
    setState({})
   
      // const response = await createCompletedSurvey({}, formData)
      setState({success:true})
    
    
    
    
    
    
    



    
  }

  const updateProgress = () => {
    console.log("vilvvassi")
    const values = Object.values(getValues())
    const completedAnswers = values.filter((v) => v)
    setProgress((completedAnswers.length / questions.length) * 100)
  }






  useEffect(() => {
    updateProgress()
    console.log("maria", currentIndex)
   
  }, [currentIndex])



  useEffect(() => {
    console.log("churail",state)
    if (state.success) {
      console.log("mulali", state)
      setCompleted(true)
    }
  }, [state])

  return (
    <>
      {!completed && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.audit}>
            <div className={styles.topBar}>
              <img
                alt="Inspire Logo"
                height={74}
                src="/logo-green.png"
                width={130}
              />
              <p className={styles.title}>Quiz Derived From Video</p>
            </div>
            <div className={styles.content}>
              <div className={`${styles.contentInner}`}>
                <div className="slider-container">
                  <TransitionGroup component={null}>
                    <CSSTransition
                      key={currentIndex}
                      timeout={900}
                      classNames="slide-next"
                    >
                      <div
                        className={`${styles.question} border border-black p-4`}
                        key={questions[currentIndex]._id}
                      >
                        <Controller
                          control={control}
                          name={`answer${questions[currentIndex]._id}`}
                          render={({ field: { onChange } }) => (
                            <RadioGroup
                              label={
                                <p>
                                  Q{currentIndex + 1}:{" "}
                                  {questions[currentIndex].name}
                                </p>
                              }
                              onChange={onChange}
                            >
                              {questions[currentIndex].answers.map((answer) => (
                                <Radio
                                  onClick={() => {
                                    currentIndex + 1 === questions.length
                                      ? setProgress(100)
                                      : null
                                  }}
                                  key={answer._id}
                                  value={answer._id}
                                >
                                  {answer.name}
                                </Radio>
                              ))}
                            </RadioGroup>
                          )}
                          rules={{ required: true }}
                        />
                      </div>
                    </CSSTransition>
                  </TransitionGroup>
                </div>

                <div className={`${styles.buttons} `}>
                  <Button
                    color="primary"
                    className="w-full"
                    isLoading={isSubmitting}
                    // type="submit"
                    onClick={() => {
                      handlePrevious()
                    }}
                  >
                    Previous
                  </Button>
                  <Button
                    color="primary"
                    className="w-full"
                    isLoading={isSubmitting}
                    isDisabled={currentIndex === questions.length - 1}
                    // type="submit"
                    onClick={() => {
                      handleNext()
                    }}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
            <div className={styles.footer}>
              {state.error && <div className="error">{state.error}</div>}
              <div className={styles.footerInner}>
                <Button color="primary" isDisabled={ currentIndex+1 != questions.length } isLoading={isSubmitting} type="submit">
                  Submit
                </Button>
                <div className={styles.progress}>
                  <Progress
                    aria-label="Survey Progress"
                    color="primary"
                    value={progress}
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      )}

      {completed && (
        <div className={styles.completed}>
          <div className={""} style={{ marginBottom: "6px" }}>
            <img src={"/public/res.svg"} width={100}></img>
          </div>

          <h1>Quiz Completed!</h1>
          <p>Thank you for your reflection.</p>
          <p>
            Your quiz score is around {correctAnswerScore}/{questions.length}
          </p>
          {/* <h1 className={styles.completedFooter}>Your INSPIRE® Team</h1> */}
        </div>
      )}
    </>
  )
}
